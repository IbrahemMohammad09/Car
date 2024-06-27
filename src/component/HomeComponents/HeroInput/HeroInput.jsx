import { FaSearch } from "react-icons/fa"
import MainSelect from "../MainSelect/MainSelect"
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroInput = ( { setCars } ) => {
    const [t , il8n] = useTranslation();
    const make = t("HeroMakes");
    const model =t("HeroModel");
    const placeHolder = t("HeroPlaceHolder");
    const searchButton =t("HeroSearchButton");
    const [makeInput, setMakeInput] = useState('');
    const [modelInput, setModelInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const navigate = useNavigate();
    
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

    return (
        <div className="bg-white rounded-[10px] min-[671px]:rounded-[80px] max-[670px]:p-[20px] p-[10px] min-[671px]:ps-[55px] w-[95%] md:w-[700px] lg:w-[930px] flex items-center gap-[31px] max-[670px]:flex-col max-[670px]:w-fit max-[600px]:gap-5">
            {/* <MainSelect name={make} />
            <MainSelect name={model}/> */}
            <input type="text" className="bg-white border-none outline-none min-[671px]:w-full" placeholder={placeHolder} onChange={(e) => setTextInput(e.target.value)} />
            <div onClick={handleSearch} className="flex items-center justify-center gap-[9px] py-[16px] px-[30px] lg:px-[52px] rounded-[60px] bg-__brown text-white cursor-pointer text-nowrap opacity-90 hover:opacity-100 duration-300 max-[600px]:py-2">
                <FaSearch />
                {searchButton}
            </div>
        </div>
    )
}

export default HeroInput