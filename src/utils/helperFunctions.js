export function prepareWaypoints(intermediatePoints) {
    return intermediatePoints.map(routePoint => {
        return {
            // eslint-disable-next-line
            location: new google.maps.LatLng(routePoint.lat, routePoint.lng),
            stopover: false
        }
    });
}

export const waypoints = [
    {
        lat: -1.9377406701340436,
        lng: 30.084937011491938
    },
    {
        lat: -1.9425524753087284,
        lng: 30.08886108328484
    },
    {
        lat: -1.9430495858621306,
        lng: 30.088931709637546
    },
    {
        lat: -1.945161949988371,
        lng: 30.091914326066217
    },
    {
        lat: -1.9448123840422842,
        lng: 30.093467948118462
    },
    {
        lat: -1.946160757495063,
        lng: 30.09404462306779
    },
]

export const intermediateStops = [
    { lat: -1.939826787816454, lng: 30.0445426438232 },
    {
        lat: -1.9355377074007851,
        lng: 30.060163829002217,
    },
    {
        lat: -1.9358808342336546,
        lng: 30.08024820994666,
    },
    {
        lat: -1.9487579747059323,
        lng: 30.092385589986833,
    },
    {
        lat: -1.9592132952818164,
        lng: 30.106684061788073,
    },
    {
        lat: -1.9487480402200394,
        lng: 30.126596781356923,
    },
    {lat: -1.9365670876910166, lng: 30.13020167024439}
]

