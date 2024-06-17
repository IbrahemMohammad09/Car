import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div 
            className="bg-__opacity_white flex justify-center rounded-[44px] absolute top-[98px] left-[50%] translate-x-[-50%] overflow-hidden shadow-sm shadow-[#ccc]">
            <Link className="text-white no-underline duration-300 hover:bg-__brown py-[13px] ps-[32px] pe-[16px]" to={'/'}>Home</Link>
            <Link className="text-white no-underline duration-300 hover:bg-__brown py-[13px] pe-[32px] ps-[16px]" to={'/about-us'}>About Us</Link>
        </div>
    )
}

export default Header