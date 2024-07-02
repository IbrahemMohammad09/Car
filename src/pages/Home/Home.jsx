import Hero from "../../component/HomeComponents/Hero/Hero"
import MainButton from "../../component/SharedComponents/MainButton/MainButton"
import MainTitle from "../../component/SharedComponents/MainTitle/MainTitle"
import MainCard from '../../component/SharedComponents/MainCard/MainCard'
import Slider from "react-slick"
import { useEffect, useRef, useState } from "react"
import Img from '../../images/Home/sport.png'
import Img1 from '../../images/Home/43c5bd76-c3e4-40ee-98eb-ecc2c6dddbc3.jpeg'
import Img3 from '../../images/Home/2014 Honda Accord.jpeg'
import { useTranslation } from 'react-i18next';
import Footer from "../../component/SharedComponents/Footer/Footer"
import { FaMessage } from "react-icons/fa6"
import Img5 from '../../images/Home/unsplash_UF2nwAcD8Mo.png'
import Img4 from '../../images/Home/Best small SUVs and crossovers for 2024 - Which_.jpeg'
import Img6 from '../../images/Home/Chevrolet Corvette C7 Z06 Convertible painted in Arctic White  Photo taken by_ @autoblog on Instagram.jpeg'
import Loading from '../../component/SharedComponents/Loading/Loading'
import SideLink from "../../component/SharedComponents/sideLink/sideLink"
import axios from "axios"
import API from "../../constant/api"
import ChangeTitle from "../../component/SharedComponents/ChangeTitle"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { MdDashboardCustomize } from "react-icons/md"
import { useLanguageContext } from "../../hooks/useLanguageContext"


const cards = [
    {
        title: 'Sport', 
        img: Img,    
    },
    {
        title: 'Luxury', 
        img: Img1,    
    },
    {
        title: 'Family', 
        img: Img4,    
    },
    {
        title: 'Economy', 
        img: Img3,    
    },
    {
        title: 'Convertible', 
        img: Img6,    
    },
];

const Home = () => {

    const [t,il8n]=useTranslation();
    const HomeTitle = t("HomeTitle");
    const PopularCar = t("PopularCar");
    const LoadMore =t("LoadMore");
    const WhyUs =t("WhyUs");
    const FeelHome =t("FeelHome");

    const [type, setType] = useState([]);
    const [brand, setBrand] = useState();
    const [isVisible, setIsVisible] = useState();
    const [isVisible1, setIsVisible1] = useState();
    const [isVisible2, setIsVisible2] = useState();
    const [isVisible3, setIsVisible3] = useState();
    const [isVisible4, setIsVisible4] = useState();
    const [loading, setLoading] = useState(false);

    const Deals = t("Deals");
    const Best =t("Best");
    const hours =t("hours");
    const provide=t("provide");
    const Find = t("Find");
    const HoursDetail =t("HoursDetail");
    const SearchByCategory =t("SearchByCategory");

    const arr = [
        {
            title: Deals,
            subtitle: provide,
            icon: <FaMessage className="text-white"/>
        },
        {
            title: Best,
            subtitle: Find,
            icon: <FaMessage className="text-white"/>
        },
        {
            title: hours,
            subtitle: HoursDetail,
            icon: <FaMessage className="text-white"/>
        },
    ]

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }
    let settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }
    let settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    const elementRef = useRef(null)
    const elementRef1 = useRef(null)
    const elementRef2 = useRef(null)
    const elementRef3 = useRef(null)
    const elementRef4 = useRef(null)

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(API.GET.ALLBRANDS, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setBrands(res?.data?.brands);
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);
    const [allcars ,setAllcars] = useState([])
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLACTIVECARS+1, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
                    setAllcars(cars.length > 3 ? cars.slice(0, 3) : cars);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        const e1 = elementRef.current?.getBoundingClientRect();
        const e2 = elementRef1.current?.getBoundingClientRect();
        const e3 = elementRef2.current?.getBoundingClientRect();
        const e4 = elementRef3.current?.getBoundingClientRect();
        const e5 = elementRef4.current?.getBoundingClientRect();

        const viewportHeight = window?.innerHeight;
        if (e1.top <= viewportHeight / 1.1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        if (e2.top <= viewportHeight / 1.1) {
            setIsVisible1(true);
        } else {
            setIsVisible1(false);
        }

        if (e3.top <= viewportHeight / 1.1) {
            setIsVisible2(true);
        } else {
            setIsVisible2(false);
        }

        if (e4.top <= viewportHeight / 1.1 && !loading) {
            setIsVisible3(true);
        } else {
            setIsVisible3(false);
        }
        if (e5.top <= viewportHeight / 1.1) {
            setIsVisible4(true);
        } else {
            setIsVisible4(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const { language } = useLanguageContext();

    return (
        <section className="min-h-screen w-full bg-white overflow-x-hidden">
            <Hero/>
            <ChangeTitle title={"MEI | Home"}/>
            {token && <Link to={'/dashboard'} className="fixed z-50 top-[20px] left-[20px] flex flex-[30%] py-[5px] justify-center items-center gap-[4px] border-[1px] border-solid border-__brown bg-white text-__brown no-underline shadow-[#ccc] duration-300 w-[120px] rounded-md hover:rounded-[30px]">
                <MdDashboardCustomize/>
                Dashboard
            </Link>}
            <MainTitle title={HomeTitle}/>
            <div className={`w-full ${isVisible4 && 'animate-right'}`} ref={elementRef4}>
                <Slider {...settings} className="p-1 slide1">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => setType(prev => [...prev, e.title])} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>  
                            <a href={"/search/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </a>
                        </div>
                    </div>)}
                </Slider>

                <Slider {...settings2} className="p-1 slide2">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => setType(prev => [...prev, e.title])} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>
                            <a href={"/search/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </a>
                        </div>
                    </div>)}
                </Slider>

                <Slider {...settings3} className="p-1 slide3">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => setType(prev => [...prev, e.title])} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>  
                            <a href={"/search/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </a>  
                        </div>
                    </div>)}
                </Slider>
            </div>

            <div ref={elementRef} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer ${brand === e.name? 'scale-95': 'scale-100'}`} onClick={() => setBrand(e.name)}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture} onClick={()=>{navigate('/search/'+e.name)}} alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </div>

            <MainTitle title={PopularCar}/>
            <div ref={elementRef3} className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative ${isVisible3 && 'animate-right'}`}>
                <Loading loading={loading} style={'absolute left-[50%] translate-x-[-50%]'}/>
                {allcars && !loading && allcars?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            <div className={`mx-auto text-center w-fit ${loading? 'mt-[200px]': 'mt-[40px]'}`}>
                <MainButton name={LoadMore} url={"/search/:name"}/>
            </div>

            <MainTitle title={WhyUs}/>
            <div className="bg-__dark_white py-[65px] px-[100px] flex justify-center w-full gap-[50px] items-center container mx-auto max-[991px]:flex-col" dir={language === 'AR' ? 'rtl' : 'ltr'}>
                <div className={`h-[687px] w-[524px] max-[600px]:w-full ${isVisible1 && (language === 'AR'? 'animate-right':'animate-left')}`} ref={elementRef1}>
                    <img src={Img5} alt={'Sport car with orange color'} className="w-full h-full object-fit"/>
                </div>
                <div ref={elementRef2} className={`${isVisible2 && (language === 'EN'? 'animate-right':'animate-left')}`}>
                    <h1 className="text-__brown text-[2.5rem] leading-[55px] font-medium min-[992px]:w-[300px] max-[500px]:text-center">{FeelHome}</h1>
                    <div className="flex flex-col gap-[20px] mt-[62px]">
                        {arr.map((e, i) => <div key={i} className="flex gap-[30px] max-[991px]:flex-col max-[500px]:text-center">
                            <div className="bg-__brown flex justify-center items-center rounded-full w-[47px] h-[47px] max-[500px]:mx-auto">
                                {e.icon}
                            </div>
                            <div className="min-[992px]:w-[250px]">
                                <h1 className="text-[14px] leading-[22.58px] font-bold">{e.title}</h1>
                                <h2 className="text-[14px] leading-[22.58px] font-normal mt-[8px]">{e.subtitle}</h2>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>

            <Footer/>

            <SideLink />
        </section>
    )
}

export default Home