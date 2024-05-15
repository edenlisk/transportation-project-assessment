import {DirectionsRenderer, GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {useEffect, useState} from "react";
import {
    intermediateStops,
    prepareWaypoints,
    waypoints
} from "../utils/helperFunctions.js";
import Header from "./Header.jsx";
import RideMetrics from "./RideMetrics.jsx";
import Footer from "./Footer.jsx";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

const libraries = ['maps'];

const MainMap = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries
    });
    const [metrics, setMetrics] = useState({distance: {text: '', value: 0}, duration: {text: '', value: 0}});
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [nextStopAddress, setNextStopAddress] = useState('');
    const [currentPosition, setCurrentPosition] = useState(intermediateStops[0]);
    const [startPointIndex, setStartPointIndex] = useState(0);
    const [nextStopPointIndex, setNextStopPointIndex] = useState(1);
    const [isCarMoving, setIsCarMoving] = useState(false);
    const [busPositionIndex, setBusPositionIndex] = useState(0);
    const [map, setMap] = useState(null);
    const [subRouteDirectionsResponse, setSubRouteDirectionsResponse] = useState(null);

    async function drawRoute() {
        const result = await fetchRoute(intermediateStops[0], intermediateStops[intermediateStops.length - 1], waypoints);
        setDirectionsResponse(result);
    }

    useEffect(() => {
        drawRoute()
        // eslint-disable-next-line
    }, [map]);

    useEffect(() => {
        const moveCar = async () => {
            if (isCarMoving) {
                if (subRouteDirectionsResponse) {
                    await calculateNextBusPosition();
                }
            }
        }
        const interval = setInterval(() => {
            moveCar();
        }, 500);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [isCarMoving, busPositionIndex, metrics, subRouteDirectionsResponse]);

    async function onStartup() {
        setIsCarMoving(true);
        const result = await fetchRoute(intermediateStops[startPointIndex], intermediateStops[nextStopPointIndex]);
        setSubRouteDirectionsResponse(result);
    }


    async function calculateNextStopMetrics(origin, destination, waypoints = []) {
        const result = await fetchRoute(origin, destination, waypoints);
        setMetrics(prevState => (
            {
                ...prevState,
                distance: {
                    text: result.routes[0].legs[0].distance.text,
                    value: result.routes[0].legs[0].distance.value
                },
                duration: {
                    text: result.routes[0].legs[0].duration.text,
                    value: result.routes[0].legs[0].duration.value
                }
            })
        )
        setNextStopAddress(result.routes[0].legs[0].end_address);
    }

    async function fetchRoute(origin, destination, waypoints = []) {
        if (map) {
            // eslint-disable-next-line
            const directionService = new google.maps.DirectionsService();
            return await directionService.route({
                origin,
                destination,
                // eslint-disable-next-line
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: prepareWaypoints(waypoints)
            });
        }
    }

    async function calculateNextBusPosition() {
        if (busPositionIndex >= subRouteDirectionsResponse.routes[0].overview_path.length) {
            if (nextStopPointIndex + 1 === intermediateStops.length) {
                console.log('car reached destination');
                setBusPositionIndex(0);
                setStartPointIndex(0);
                setNextStopPointIndex(1);
                setIsCarMoving(false);
                return;
            }
            setStartPointIndex(prevState => prevState + 1);
            setNextStopPointIndex(prevState => prevState + 1);
            setBusPositionIndex(0);
            const result = await fetchRoute(
                intermediateStops[startPointIndex + 1],
                intermediateStops[nextStopPointIndex + 1],
                startPointIndex + 1 === 2 ? waypoints : []
            );
            setSubRouteDirectionsResponse(result);
            return;
        }
        const coords = subRouteDirectionsResponse.routes[0].overview_path[busPositionIndex];
        await calculateNextStopMetrics(currentPosition, intermediateStops[nextStopPointIndex], startPointIndex === 2 ? waypoints : []);
        setCurrentPosition({lat: coords.lat(), lng: coords.lng()});
        map.setCenter(currentPosition);
        setBusPositionIndex(prevState => prevState + 1);
    }

    if (!isLoaded) {
        return <div>Loading....</div>
    }

    return (
        <div style={{width: '100%', height: '40rem'}}>
            <Header onStartup={onStartup}/>
            <RideMetrics durations={metrics.duration.text} distance={metrics.distance.text}
                         nextStopAddress={nextStopAddress}/>
            <GoogleMap
                options={{streetViewControl: false}}
                center={currentPosition}
                zoom={10}
                mapContainerStyle={{height: '90%', width: '100%', position: 'relative'}}
                onLoad={(map) => setMap(map)}
            >
                <Marker title={"Driver's Location"} position={currentPosition}/>
                {intermediateStops && intermediateStops.map((routePoint, index) => {
                    if (index !== 0 && index !== intermediateStops.length) {
                        return <Marker
                            key={index}
                            position={routePoint}
                            icon={{url: `https://ik.imagekit.io/mqrq0nywc/tr:w-40/bus-stop-icon.png`}}
                            // eslint-disable-next-line
                            animation={index === nextStopPointIndex && isCarMoving ? google.maps.Animation.BOUNCE : null}
                        />
                    }
                })}
                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            </GoogleMap>
            <Footer/>
        </div>
    )
}

export default MainMap;