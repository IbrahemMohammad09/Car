import { Link } from "react-router-dom"
import img3 from '../../../images/dashBoardLogin/car-wheel.png'
import img1 from '../../../images/dashBoardLogin/home.png'
import img4 from '../../../images/dashBoardLogin/user.png'
import img2 from '../../../images/dashBoardLogin/car.png'
import { BsEye } from "react-icons/bs"
import { SiToyota } from "react-icons/si"

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 w-[100px] bg-__brown h-full text-center py-3">
            <h1 className="text-[2rem] mb-5">MEI</h1>
            <Link className="duration-300 hover:scale-105 no-underline w-[40px] h-[40px] mx-auto mb-4 overflow-hidden block" to={'/dashboard'}>
                <img src={img1} alt={img1} className="w-full h-full"/>
            </Link>
            <Link className="duration-300 hover:scale-105 no-underline w-[40px] h-[40px] mx-auto mb-4 overflow-hidden block" to={'/dashboard/show'}>
                <img src={img2} alt={img2} className="w-full h-full"/>
            </Link>
            <Link className="duration-300 hover:scale-105 no-underline w-[40px] h-[40px] mx-auto mb-4 overflow-hidden block" to={'/dashboard/add'}>
                <img src={img3} alt={img3} className="w-full h-full"/>
            </Link>
            <Link className="duration-300 hover:scale-105 no-underline w-[40px] h-[40px] mx-auto mb-4 overflow-hidden block" to={'/dashboard/bookings'}>
                <img src={img4} alt={img4} className="w-full h-full"/>
            </Link>
            <Link className="no-underline mx-auto mb-4 overflow-hidden block text-black font-bold duration-300 hover:scale-105" to={'/dashboard/brands'}>
                <SiToyota className="text-[3.5rem] mx-auto"/>
            </Link>
            <Link className="no-underline mx-auto mb-4 overflow-hidden block text-black font-bold duration-300 hover:scale-105" to={'/'}>
                <BsEye className="text-[3.5rem] mx-auto"/>
            </Link>
        </div>
    )
}

export default Sidebar