import { FaSearch } from "react-icons/fa"

const HeaderDash = () => {
    return (
        <div className="fixed top-0 left-[100px] flex justify-between mx-auto items-center z-[100] bg-white shadow-md px-[40px] py-2 pt-5" style={{
            width: "calc(100% - 100px)"
        }}>
            <h1 className="text-[2rem]">Dashboard</h1>
        </div>
    )
}

export default HeaderDash