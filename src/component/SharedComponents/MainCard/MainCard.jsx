import { useRef, useState } from "react"
import { FaCalendar, FaPhone, FaWhatsapp } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MainCard.css'
import { phone } from "../../../constant/infoData";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../../hooks/useLanguageContext";

const MainCard = ( { pictures, name, daylyPrice, monthlyPrice, weeklyPrice, id } ) => {    
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const { language } = useLanguageContext();

    const sliderRef = useRef();

    const handleButtonClick = (i) => {
        setIndex(i);
        sliderRef.current.slickGoTo(i);
    };

    const handleAfterChange = (currentSlide) => {
        setIndex(currentSlide);
    };

    const settings = {
        infinite: true,
        speed: 500,
        // slidesToShow: 0,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        afterChange: handleAfterChange
    }

    const handleNameShow = (name, size) => {
        if(name.length <= size) {
            return name;
        } else {
            return name.slice(0, size)+'...';
        }
    }

    const [t,il8n]=useTranslation();
    
    const Daily =t("Daily");
    const Monthly =t("Monthly");
    const Weekly =t("Weekly");
    
    return (
        <div>
            <div className="bg-white w-full border-[1px] border-solid border-__brown rounded-[15px] overflow-hidden">
                <div className="w-full relative border-b-[1px] border-__brown border-solid">
                    <Slider ref={sliderRef} {...settings} className="p-1">
                        {pictures?.map((e, i) => <div  key={i} className="h-[300px]">
                            <img onClick={()=>{navigate(`/book-car/${id}`)}} src={e} alt={name + '-slide-' + (i+1)} className="w-full h-full rounded-[15px]"/>
                        </div>)}
                    </Slider>
                    <div className="flex justify-center items-center gap-[2px] absloute bottom-[0] z-[10] mb-1">
                        {pictures?.map((e, i) => <div key={i} className={`rounded-full shadow-[#ccc] shadow-md w-[20px] h-[20px] cursor-pointer ${index === i? 'bg-__brown': 'bg-slate-300'} duration-300 hover:bg-__brown`} onClick={() => handleButtonClick(i)}></div>)}
                    </div>
                </div>
                <h1 className="text-center mx-auto text-__brown font-semibold leading-[19px] text-[2rem] my-2">{handleNameShow(name, 18)}</h1>

                <div className="flex justify-center items-center gap-[8px] flex-wrap mb-2" dir={language === 'AR' ? 'rtl' : 'ltr'}>
                    <div>
                        <div className="text-center text-[14px] md:text-[16px]"></div>
                        <div className="p-[4px] md:p-[6px] border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center text-[14px] md:text-[16px]">
                        {Daily}:  <span className="text-__brown font-bold mx-1">
                        {daylyPrice}
                        </span> AED
                        </div>
                    </div>
                    <div>
                        <div className="text-center text-[14px] md:text-[16px]"></div>
                        <div className="p-[4px] md:p-[6px] border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center text-[14px] md:text-[16px]">
                        {Monthly}:  <span className="text-__brown font-bold mx-1">
                        {monthlyPrice}
                        </span> AED
                        </div>    
                    </div>
                    <div>
                        <div className="text-center text-[14px] md:text-[16px]"></div>
                        <div className="p-[4px] md:p-[6px] border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center text-[14px] md:text-[16px]">
                        {Weekly}: <span className="text-__brown font-bold mx-1">
                        {weeklyPrice}
                        </span> AED
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-start gap-[2px]">
                    <a href={`https://wa.me/${phone}`}  className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%] "><FaWhatsapp/>Whats app</a>
                    <a href={`tel:${phone}`} className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%] "><FaPhone/>Call us</a>
                    <a href={`/book-car/${id}`} className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%] "><FaPhone/>Book</a>
                </div>
            </div>
        </div>
    )
}

export default MainCard