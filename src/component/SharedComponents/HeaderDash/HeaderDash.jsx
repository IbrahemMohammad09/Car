import { FaSearch } from "react-icons/fa"

const HeaderDash = () => {
    return (
        <div className="fixed top-0 left-[50%] translate-x-[-50%] mt-5 flex justify-center gap-[400px] container mx-auto items-center z-50">
            <h1 className="text-[2rem]">Dashboard</h1>
            <div className="flex rounded-md justify-center items-center gap-2 ps-2 bg-neutral-200">
                <FaSearch className="cursor-pointer"/>
                <input type="text" className="p-2 ps-1 px-3 bg-neutral-200 rounded-md accent-__brown placeholder:text-black" style={{all: 'unset'}} placeholder="Search on type"/>
            </div>
        </div>
    )
}

export default HeaderDash