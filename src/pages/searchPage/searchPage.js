import { useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import API from "../../constant/api"
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import { FaCar } from 'react-icons/fa'
import Slider from 'react-slick';
import React, { useContext } from 'react';
import { StorageContext } from '../../context/SearchContext';
import ScrollAnimation from 'react-animate-on-scroll';
import SEO from '../../component/SharedComponents/SEO/SEO';
import { MetaSEO } from '../../constant/MetaSEO';



function SearchPage (){
const { searchbrands, setSearchBrands, searchcategory, setSearchCategory, searchname, setSearchName,clearStorage } = useContext(StorageContext);
    
const carsHero = [
    {
        title: 'Sport',
        icon: <FaCar/>,
        url:"/search/Sport"
    },
    {   
        title: 'Luxury',
        icon: <FaCar/>,
        url:"/search/Luxury"
    },
    {
        title: 'Family',
        icon: <FaCar/>,
        url:"/search/Family"
    },
    {
        title: 'Economy',
        icon: <FaCar/>,
        url:"/search/Economy"
    },
    {
        title: 'Convertible',
        icon: <FaCar/>,
        url:"/search/Convertible"
    }
]
    const [t , il8n] = useTranslation();
    const seeButton = t("seeAllCar");
    const [Res ,SetRes] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState([]);
    const [brandsName , setBrandsName] = useState();
    const [brandsId, setBrandsId] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const notFound =t("noResults");

    const { pathname } = useLocation();

    const { name, type } = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(API.GET.ALLCARSWITHOUTPAGE, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    SetRes(res?.data?.cars.filter(e => e.available !== false));
                    setTotal(res?.data?.count)
                }
            })
            .catch(err => {
                setLoading(false);
            })
            
    }, [page, name, type]);
    
    useEffect(() => {
        axios.get(API.GET.ALLBRANDS, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setBrands(res?.data?.brands);
                    brands.forEach(e => setBrandsId(prev => [...prev, e._id]))
                    const names = brands.map(brand => brand.name);
                    setBrandsName (names);
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);
    

    const pathParts = pathname.split('/');
    const lastWord = pathParts[pathParts.length - 1];

    const filterCars = (cars, type, value, all) => {
        if(type === 'find' && value === 'all') {
            return cars;
        }
        if(type === 'brand') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.brand));
        } else if(type === 'name') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.name) || newRegex.test(car.category));
        } else if(type === 'category') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.category));
        } else {
            navigate('/error')
        }
    }

    const [index, setIndex] = useState(false);

    const showAllCars =()=>{
        navigate('/search/find/all')
    }

    let settings4 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings5 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings6 = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    let settings7 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    }

    useEffect(() => {
        if(pathname.includes("find/all")) {
            return;
        }
        setTimeout(() => {
            window.scrollTo(0, 800)
        }, 1000)
    }, [pathname]);

    return (
        <div className='relative w-full overflow-hidden'>
            <SEO 
                title={"MEI | Search Page"}
                description={MetaSEO.search.description}
                state={"index, follow"}
                keywords={MetaSEO.search.keywords}
                name={"MEI Car Rentals Dubai"}
                type={"website"}
            />
            <Hero carsHero={carsHero}/>

            <ScrollAnimation animateIn="animate-right" animateOnce={false}>

            <Slider {...settings4} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider1`}>
                {brands && brands?.map((e, i) => <div onClick={()=>{navigate('/search/brand/'+e.name)}} key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer brands-slider-brand `}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings5} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider2`}>
                {brands && brands?.map((e, i) => <div key={i} onClick={()=>{navigate('/search/brand/'+e.name)}} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer brands-slider-brand `}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings6} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider3`}>
                {brands && brands?.map((e, i) => <div key={i} onClick={()=>{navigate('/search/brand/'+e.name)}} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer brands-slider-brand `}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            <Slider {...settings7} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] brands-slider4`}>
                {brands && brands?.map((e, i) => <div key={i} onClick={()=>{navigate('/search/brand/'+e.name)}} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer brands-slider-brand `}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture}  alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </Slider>

            </ScrollAnimation>

            <ScrollAnimation animateIn="animate-left" animateOnce={false}>
            <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative mt-[100px]`}>
                {Res && filterCars(Res, type, name, index)?.length > 0 && filterCars(Res, type, name, index)?.map((e, i) =>  <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>

            </ScrollAnimation>


            {Res && filterCars(Res, type, name)?.length === 0 && <h2 className='text-center mt-10 mx-auto'>{notFound}</h2>}
            {name !== 'all' && <div className="flex justify-center items-center pt-20">
                <button onClick={showAllCars}  className="cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]">
                    {seeButton}
                </button>
            </div>}
            <Footer/>
            <SideLink />
        </div>
    );
}


export default SearchPage;