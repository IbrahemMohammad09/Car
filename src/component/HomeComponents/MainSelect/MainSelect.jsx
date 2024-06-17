import { useState } from "react";
import { FaAngleDown } from "react-icons/fa"

const MainSelect = ( { name, setSelect, options = [1,2,3,4,5] } ) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative flex items-center">
            <span onClick={() => setShow(!show)} className="cursor-pointer flex gap-4 lg:gap-8 items-center justify-center text-nowrap">{name} <FaAngleDown className={`${show && 'rotate-180'}`}/></span>
            <div className={`bg-white rounded-md flex-col absolute border-[1px] border-solid border-[#ccc] flex ${show ? 'opacity-100 h-fit' : 'opacity-0 h-0'} overflow-hidden w-[90%] top-[30px] duration-300 z-10`}>
                {options.map((e, i) => <div key={i} onClick={() => setSelect(e)} className="cursor-pointer duration-300 hover:bg-__brown hover:text-white px-4 py-1 pb-2">{e}</div>)}
            </div>
            <div className="w-[1px] h-[30px] bg-__brown ms-[10px] max-[670px]:hidden"></div>
        </div>
    )
}

export default MainSelect