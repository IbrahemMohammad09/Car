import { Link } from "react-router-dom"
import DashBoard from "../dashBoard/dasBoard"
import { FaCar, FaCarSide } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import img from '../../images/dashBoardLogin/welcome1.jpg'
import { SiToyota } from "react-icons/si"
import { ToastContainer } from "react-bootstrap"

const HomeDash = () => {
    return (
        <DashBoard>
            <ToastContainer/>
            <div className="flex">
                <div className="flex flex-col relative z-40">
                    <Link className="text-center text-black animate-left shadow-md shadow-[#ccc] no-underline duration-300 hover:scale-105 rounded-md border-[1px] border-__brown border-solid w-[400px] p-3 mb-3" to={'/dashboard/show'}>
                        <FaCar className={'text-center mx-auto text-[2rem]'}/>
                        <h1 className="text-[1.5rem]">Show all cars</h1>
                        <h2 className="text-[1.5rem]">اظهر كل السيارات المتاحة</h2>
                    </Link>
                    <Link className="text-center text-black animate-left shadow-md shadow-[#ccc] no-underline duration-300 hover:scale-105 rounded-md border-[1px] border-__brown border-solid w-[400px] p-3 mb-3" to={'/dashboard/add'}>
                        <FaCarSide className={'text-center mx-auto text-[1.5rem]'}/>
                        <h1 className="text-[1.5rem]">Add a new car</h1>
                        <h2 className="text-[1.5rem]">أضف سيارة جديدة</h2>
                    </Link>
                    <Link className="text-center text-black animate-left shadow-md shadow-[#ccc] no-underline duration-300 hover:scale-105 rounded-md border-[1px] border-__brown border-solid w-[400px] p-3 mb-3" to={'/dashboard/brands'}>
                        <SiToyota className={'text-center mx-auto text-[1.5rem]'}/>
                        <h1 className="text-[1.5rem]">Show all brands</h1>
                        <h2 className="text-[1.5rem]">اظهر كل البراندات</h2>
                    </Link>
                    <Link className="text-center text-black animate-left shadow-md shadow-[#ccc] no-underline duration-300 hover:scale-105 rounded-md border-[1px] border-__brown border-solid w-[400px] p-3 mb-3" to={'/dashboard/bookings'}>
                        <CgNotes className={'text-center mx-auto text-[1.5rem]'}/>
                        <h1 className="text-[1.5rem]">Show all bookings</h1>
                        <h2 className="text-[1.5rem]">اظهر كل الحجوزات</h2>
                    </Link>
                </div>
                <div className="h-[80vh] ms-5 flex justify-center items-center animate-bottom">
                    <img src={img} alt={img} className="h-full w-full"/>
                </div>
            </div>
        </DashBoard>
    )
}

export default HomeDash