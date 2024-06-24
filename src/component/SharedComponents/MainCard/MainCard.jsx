import { useRef, useState } from "react"
import { FaCalendar, FaPhone, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MainCard.css'

const MainCard = ( { pictures, name, daylyPrice, monthlyPrice, weeklyPrice, id } ) => {
    const [index, setIndex] = useState(0);

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
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        afterChange: handleAfterChange
    }
    
    return (
        <div>
            <div className="bg-white w-full border-[1px] border-solid border-__brown rounded-[15px] overflow-hidden">
                <div className="w-full relative border-b-[1px] border-__brown border-solid">
                    <Slider ref={sliderRef} {...settings} className="p-1">
                        {pictures?.map((e, i) => <div key={i} className="h-[300px]">
                            <img src={e} alt={name + 'slide' + i} className="w-full h-full"/>
                        </div>)}
                    </Slider>
                    <div className="flex justify-center items-center gap-[2px] absloute bottom-[0] z-[10] mb-1">
                        {pictures?.map((e, i) => <div key={i} className={`rounded-full shadow-[#ccc] shadow-md w-[20px] h-[20px] cursor-pointer ${index === i? 'bg-__brown': 'bg-slate-300'} duration-300 hover:bg-__brown`} onClick={() => handleButtonClick(i)}></div>)}
                    </div>
                </div>
                <h1 className="text-center mx-auto text-__brown font-semibold leading-[19px] text-[1rem] my-2">{name}</h1>
                <div className="flex justify-center items-center gap-[8px] flex-wrap mb-2">
                    <div>
                        <div className="text-center text-[12px]">Dayly</div>
                        <div className="hover:bg-__brown duration-300 p-[2px] overflow-hidden border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center cursor-pointer hover:text-white relative">{daylyPrice} AED</div>
                    </div>
                    <div>
                        <div className="text-center text-[12px]">Monthly</div>
                        <div className="hover:bg-__brown duration-300 p-[2px] overflow-hidden border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center cursor-pointer hover:text-white relative">{monthlyPrice} AED</div>    
                    </div>
                    <div>
                        <div className="text-center text-[12px]">Weekly</div>
                        <div className="hover:bg-__brown duration-300 p-[2px] overflow-hidden border-[1px] border-solid border-__brown rounded-[10px] flex justify-center items-center cursor-pointer hover:text-white relative">{weeklyPrice} AED</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-start gap-[2px]">
                    <a href={'#'} className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%] "><FaWhatsapp/>Whats app</a>
                    <a href={'#'} className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%] "><FaPhone/>Call us</a>
                    <Link className="flex flex-[30%] py-[5px] justify-center items-center gap-[4px] text-white bg-__brown no-underline duration-300 hover:translate-y-[10%]" to={'/book-car/'+id}><FaCalendar/>Book now</Link>
                </div>
            </div>
        </div>
    )
}

export default MainCard