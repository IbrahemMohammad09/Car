import { FaSearch } from "react-icons/fa"
import MainSelect from "../MainSelect/MainSelect"
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa"
import { useLanguageContext } from "../../../hooks/useLanguageContext";

const HeroInput = ( { setCars } ) => {
    const [show, setShow] = useState(false);

    const category = ["Sport", "Luxury", "Family", "Economy", "Convertible"];
    const [t , il8n] = useTranslation();

    const make = t("HeroMakes");
    // const model =t("HeroModel");
    const placeHolder = t("HeroPlaceHolder");
    const searchButton =t("HeroSearchButton");

    const [makeInput, setMakeInput] = useState('');
    // const [modelInput, setModelInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const navigate = useNavigate();    
    const [selectedValue, setSelectedValue] = useState('');

    // const MakeInput = (value) => {
    //     setMakeInput(value);
    //     setSelectedValue(value)
    //     setShow(false); 

    // };
    const handleSearch = () => {
        console.log(textInput === '');
        if (!textInput){
            console.log(1);
            navigate("/")
        }else{
            console.log(2);
            navigate("/search/"+textInput);
        }
        
    };

    const { language } = useLanguageContext();

    return (
        <div className="bg-white rounded-[10px] min-[671px]:rounded-[80px] max-[670px]:p-[20px] p-[10px] min-[671px]:ps-[55px] w-[95%] md:w-[700px] lg:w-[930px] flex items-center gap-[31px] max-[670px]:flex-col max-[670px]:w-fit max-[600px]:gap-5">
            {/* <div className="relative flex items-center">
                <span onClick={() => setShow(!show)} className="cursor-pointer flex gap-4 lg:gap-8 items-center justify-center text-nowrap">
                    {selectedValue || make} <FaAngleDown className={`${show && 'rotate-180'}`} />
                </span>
                <div className={`bg-white rounded-md flex-col absolute border-[1px] border-solid border-[#ccc] flex ${show ? 'opacity-100 h-fit w-fit' : 'opacity-0 h-0'} overflow-hidden w-[90%] top-[30px] duration-300 z-10`}>
                    {category.map((e, i) => (
                    <div key={i} onClick={() => MakeInput(e)} className="cursor-pointer duration-300 hover:bg-__brown hover:text-white px-4 py-1 pb-2">
                        {e}
                    </div>
                    ))}
                </div>
                <div className="w-[1px] h-[30px] bg-__brown ms-[10px] max-[670px]:hidden"></div>
            </div>  */}
            {/* <MainSelect name={make} />
            <MainSelect name={model}/> */}
            <input type="text" className={`bg-white border-none outline-none min-[671px]:w-full`} dir={language === 'AR' && 'rtl'} placeholder={placeHolder} onChange={(e) => setTextInput(e.target.value)} />
            <div onClick={handleSearch} className="flex items-center justify-center gap-[9px] py-[16px] px-[30px] lg:px-[52px] rounded-[60px] bg-__brown text-white cursor-pointer text-nowrap opacity-90 hover:opacity-100 duration-300 max-[600px]:py-2">
                <FaSearch />
                {searchButton}
            </div>
        </div>
    )
}

export default HeroInput