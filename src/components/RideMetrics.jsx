import PropTypes from "prop-types";

const RideMetrics = ({durations, distance, nextStopAddress}) => {

    return (
        <div className='overflow-x-hidden w-[100%] z-50 bg-white text-gray-600 px-2 py-4 flex flex-col gap-1 justify-between items-start'>
            <h2 className="text-4xl font-bold">Nyabugogo - Kimironko</h2>
            <p className="text-3xl font-semibold next-stop">Next stop: {nextStopAddress}</p>
            <div className="text-3xl font-semibold flex gap-2 justify-between items-center">
                <span>Distance: {distance}</span>
                <span>Time: {durations}</span>
            </div>
        </div>
    )
}

RideMetrics.propTypes = {
    durations: PropTypes.string,
    distance: PropTypes.string,
    nextStopAddress: PropTypes.string
}

export default RideMetrics;