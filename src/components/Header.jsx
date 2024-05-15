import menuIcon from "../assets/menu-icon.png";
import PropTypes from "prop-types";


const Header = ({onStartup}) => {

    return (
        <div className="text-gray-600 bg-gradient-to-r from-[#5fa9e0] to-[#7AD95C] flex justify-between items-center px-6 py-6 rounded-t-lg ">
            <img className="w-12" src={menuIcon} alt="Menu Icon"/>
            <button className="text-5xl font-bold" onClick={onStartup}>Startup</button>
        </div>
    )
}

Header.propTypes = {
    onStartup: () => PropTypes.func.isRequired
}

export default Header;