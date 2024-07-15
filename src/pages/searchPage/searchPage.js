import { useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import './searchPage.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import API from "../../constant/api"
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import { FaCar } from 'react-icons/fa'
import Slider from 'react-slick';
import React, { useContext } from 'react';
import { StorageContext } from '../../context/SearchContext';



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
    const [searchType ,setSearchType] = useState ();
    const [Res ,SetRes] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const category1 = ["Sport", "Luxury", "Family", "Economy", "Convertible"];
    const [brands, setBrands] = useState([]);
    const [brandsName , setBrandsName] = useState();
    const [brandsId, setBrandsId] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const LoadMore =t("LoadMore");
    const notFound =t("noResults");

    const { pathname } = useLocation();

    const { name, type } = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(API.GET.ALLACTIVECARS+page, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
                    SetRes(res?.data?.cars);
                    setTotal(res?.data?.total)
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
    

    // const filterCarsByBrand = (cars, brand) => {
    //     return cars?.filter(car => car.brand === brand);
    // };

    // const handleClick=(barndName)=>{
    //     SetRes(filterCarsByBrand(cars,barndName));
    // }

    // const filterCarsByCategory = (cars, category) => {
    //     return cars.filter(car => car.category === category);
    //   };
    
    // const filterCars = (cars, name) => {
    //   return cars.filter(car => 
    //     car.name === name
    //    );
    // };

    const pathParts = pathname.split('/');
    const lastWord = pathParts[pathParts.length - 1];

    const filterCars = (cars, type, value) => {
        if(type === 'brand') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.brand));
        } else if(type === 'name') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.name) || newRegex.test(car.category));
        } else if(type === 'category') {
            const newRegex = new RegExp(`.*${value}.*`, 'i');
            return cars.filter(car => newRegex.test(car.category));
        }
    }

    const showAllCars =()=>{
        setPage(page => page+1)
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

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 950)
        }, 1000)
    }, [pathname]);

    return (
        <div className='relative w-full overflow-hidden'>
            <Hero carsHero={carsHero}/>
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

            <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative mt-[100px]`}>
                {Res && filterCars(Res, type, name)?.length > 0 && filterCars(Res, type, name)?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            <ChangeTitle title={"MEI | Search Page"}/>
            {Res && filterCars(Res, type, name)?.length === 0 && <h2 className='text-center mt-10 mx-auto'>{notFound}</h2>}
            {total >= total + 50 && <div className="flex justify-center items-center pt-20">
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