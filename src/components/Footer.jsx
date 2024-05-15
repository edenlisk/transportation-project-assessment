import likeIcon from '../assets/like-icon.png';
import clockIcon from '../assets/clock-icon.png';
import notificationIcon from '../assets/notification-icon.png';

const icons = [
    {
        icon: likeIcon,
        alt: 'heart icon'
    },
    {
        icon: clockIcon,
        alt: 'clock icon'
    },
    {
        icon: notificationIcon,
        alt: 'notification icon'
    },
]
// 60DFD4
// 5fa9e0
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#5fa9e0] to-[#7AD95C] flex justify-between items-center px-6 py-4 rounded-b-lg">
            { icons.map((item, index) => {
                return <img className="w-10" key={index} src={item.icon} alt={item.alt}/>
            })}
        </div>
    )
}

export default Footer;