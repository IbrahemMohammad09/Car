import { FaSearch } from "react-icons/fa"
import MainSelect from "../MainSelect/MainSelect"

const HeroInput = ( { setCars } ) => {
    return (
        <div className="bg-white rounded-[10px] min-[671px]:rounded-[80px] max-[670px]:p-[20px] p-[10px] min-[671px]:ps-[55px] w-[95%] md:w-[700px] lg:w-[930px] flex items-center gap-[31px] max-[670px]:flex-col max-[670px]:w-fit">
            <MainSelect name={'Any Makes'} />
            <MainSelect name={'Any Model'}/>
            <input type="text" className="bg-white border-none outline-none min-[671px]:w-full" placeholder="Find your request.."/>
            <div className="flex items-center justify-center gap-[9px] py-[16px] px-[30px] lg:px-[52px] rounded-[60px] bg-__brown text-white cursor-pointer text-nowrap opacity-90 hover:opacity-100 duration-300">
                <FaSearch/>
                Search Cars
            </div>
        </div>
    )
}

export default HeroInput