import Hero from "../../component/HomeComponents/Hero/Hero"
import MainButton from "../../component/SharedComponents/MainButton/MainButton"
import MainTitle from "../../component/SharedComponents/MainTitle/MainTitle"
import MainCard from '../../component/SharedComponents/MainCard/MainCard'
import Slider from "react-slick"
import { useEffect, useRef, useState, useContext } from "react"
import Img from '../../images/Home/sport.jpg'
import Img1 from '../../images/Home/luxury.png'
import Img3 from '../../images/Home/economy.jpg'
import { useTranslation } from 'react-i18next';
import Footer from "../../component/SharedComponents/Footer/Footer"
import { FaMessage } from "react-icons/fa6"
import Img5 from '../../images/Home/unsplash_UF2nwAcD8Mo.png'
import Img4 from '../../images/Home/family.jpg'
import Img6 from '../../images/Home/convertible.jpg'
import Loading from '../../component/SharedComponents/Loading/Loading'
import SideLink from "../../component/SharedComponents/sideLink/sideLink"
import axios from "axios"
import API from "../../constant/api"
import ChangeTitle from "../../component/SharedComponents/ChangeTitle"
import { Link, useNavigate } from "react-router-dom"
import { MdDashboardCustomize } from "react-icons/md"
import { useLanguageContext } from "../../hooks/useLanguageContext"
import { FaCar } from 'react-icons/fa'
import './Home.css'
import { StorageContext } from "../../context/SearchContext"
import ScrollAnimation from "react-animate-on-scroll"

const carsHero = [
    {
        title: 'Sport',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Luxury',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Family',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Economy',
        icon: <FaCar/>,
        url:"/search"
    },
    {
        title: 'Convertible',
        icon: <FaCar/>,
        url:"/search"
    }
]

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
    const { searchbrands, setSearchBrands, searchcategory, setSearchCategory, searchname, setSearchName,clearStorage } = useContext(StorageContext);

    const [t,il8n]=useTranslation();
    const HomeTitle = t("HomeTitle");
    const PopularCar = t("PopularCar");
    let [LoadMore , setLoadMore] = useState(t("LoadMore"))
    
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
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings4 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings5 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings6 = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings7 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

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
                    setAllcars(res?.data?.cars.length > 6? res?.data?.cars.slice(0, 6) : res?.data?.cars);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    
    }, []);


    const handleShowAllCar =()=>{
        if(LoadMore=="Load More"||LoadMore == "عرض المزيد" ){
            setAllcars(cars)
            setLoadMore(t("showLess"));
        }else {
            setAllcars(cars.length > 6? cars.slice(0, 6) : cars)
            setLoadMore(t("LoadMore"))
        }
        
    }
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const { language } = useLanguageContext();

    const sliderRef = useRef();

    const [index, setIndex] = useState(0);

    const elementRef1 = useRef()
    const elementRef2 = useRef()
    const elementRef3 = useRef()
    const elementRef4 = useRef()
    const sliderRef1 = useRef()
    const sliderRef2 = useRef()
    const sliderRef3 = useRef()
    const sliderRef4 = useRef()

    return (
        <section className="min-h-screen w-full bg-white overflow-x-hidden">
            <Hero carsHero={carsHero}/>
            <ChangeTitle title={"MEI | Home"}/>
            {token && <Link to={'/dashboard'} className="fixed z-50 top-[20px] left-[20px] flex flex-[30%] py-[5px] justify-center items-center gap-[4px] border-[1px] border-solid border-__brown bg-white text-__brown no-underline shadow-[#ccc] duration-300 w-[120px] rounded-md hover:rounded-[30px]">
                <MdDashboardCustomize/>
                Dashboard
            </Link>}
            <MainTitle title={HomeTitle}/>

            <ScrollAnimation animateIn="animate-right" animateOnce={false}>

            <div className={`w-full ${isVisible4 && 'animate-right'}`} ref={elementRef4}>
                <Slider {...settings} className="p-1 slide1">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => {setType(prev => [...prev, e.title]);}} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>  
                            <Link onClick={()=>{setSearchCategory(e.title)} } to={"/search/category/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </Link>
                        </div>
                    </div>)}
                </Slider>
                <Slider {...settings2} className="p-1 slide2">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => {setType(prev => [...prev, e.title]); }} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>
                            <Link onClick={()=>{setSearchCategory(e.title)} } to={"/search/category/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </Link>
                        </div>
                    </div>)}
                </Slider>

                <Slider {...settings3} className="p-1 slide3">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => {setType(prev => [...prev, e.title]);}} className={`w-full h-full object-cover mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                        <div className="absolute left-[30px] top-[30px] z-[30] flex flex-col">
                            <h1 className="text-__brown text-[3rem] font-bold">{e.title}</h1>
                            <h2 className="text-white text-[3rem] font-bold mt-[-10px]">cars</h2>  
                            <Link onClick={()=>{setSearchCategory(e.title)} } to={"/search/category/"+e.title} className="text-xl text-__brown text-[3rem] no-underline bg-white w-fit duration-300 px-2 rounded-md hover:scale-105 ">{SearchByCategory} </Link>  
                        </div>
                    </div>)}
                </Slider>
            </div>

            </ScrollAnimation>

            <ScrollAnimation animateIn="animate-left" animateOnce={false}>

            <Slider {...settings4} ref={sliderRef1} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider1 ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer${brand === e.name? 'scale-95': 'scale-100'} brands-slider-brand `} onClick={() => setBrand(e.name)}>
                    <div onClick={()=>{navigate('/search/brand/'+e.name); }} className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings5} ref={sliderRef2} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider2 ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer${brand === e.name? 'scale-95': 'scale-100'} brands-slider-brand `} onClick={() => setBrand(e.name)}>
                    <div onClick={()=>{setSearchBrands(e.name); navigate('/search/brand/'+e.name); }}  className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings6} ref={sliderRef3} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider3 ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer${brand === e.name? 'scale-95': 'scale-100'} brands-slider-brand `} onClick={() => setBrand(e.name)}>
                    <div onClick={()=>{setSearchBrands(e.name); navigate('/search/brand/'+e.name); }}  className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings7} ref={sliderRef4} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider4 ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer${brand === e.name? 'scale-95': 'scale-100'} brands-slider-brand `} onClick={() => setBrand(e.name)}>
                    <div onClick={()=>{setSearchBrands(e.name); navigate('/search/brand/'+e.name); }}  className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            </ScrollAnimation>

            <MainTitle title={PopularCar}/>

            <ScrollAnimation animateIn="animate-right" animateOnce={false}>

            <div ref={elementRef3} className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative ${isVisible3 && 'animate-right'}`}>
                <Loading loading={loading} style={'absolute left-[50%] translate-x-[-50%]'}/>
                {allcars && !loading && allcars?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>

            </ScrollAnimation>

            <div className={`mx-auto text-center w-fit ${loading? 'mt-[200px]': 'mt-[40px]'}`}>
                {/* <MainButton name={LoadMore} url={"/search"}/> */}
                <Link to={'#'} onClick={()=>{handleShowAllCar()}} className="cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]">
                    {LoadMore}
                </Link>
            </div>

            <MainTitle title={WhyUs}/>
            <div className="bg-__dark_white py-[65px] px-[100px] flex justify-center w-full gap-[50px] items-center container mx-auto max-[991px]:flex-col" dir={language === 'AR' ? 'rtl' : 'ltr'}>
                <ScrollAnimation animateIn={`${language === 'AR'? 'animate-right':'animate-left'}`} animateOnce={false}>
                    <div className={`h-[687px] w-[524px] max-[600px]:w-full ${isVisible1 && (language === 'AR'? 'animate-right':'animate-left')}`} ref={elementRef1}>
                        <img src={Img5} alt={'Sport car with orange color'} className="w-full h-full object-fit"/>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={`${language !== 'AR'? 'animate-right':'animate-left'}`} animateOnce={false}>

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

                </ScrollAnimation>
            </div>

            <Footer/>

            <SideLink />
        </section>
    )
}

export default Home