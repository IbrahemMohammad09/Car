import { useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import './searchPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import API from "../../constant/api"
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';

function SearchPage (){
    const [t , il8n] = useTranslation();
    const seeButton = t("seeAllCar");
    const [searchType ,setSearchType] = useState ();
    const [Res ,SetRes] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const category = ["Sport", "Luxury", "Family", "Economy", "Convertible"];
    const [brands, setBrands] = useState([]);
    const [brandsName , setBrandsName] = useState();
    const [brandsId, setBrandsId] = useState([]);
    const [page, setPage] = useState(1);

    const LoadMore =t("LoadMore");
    const notFound =t("noResults");

    const { pathname } = useLocation();

    useEffect(() => {
        setLoading(true)
        axios.get(API.GET.ALLACTIVECARS+page, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
                    SetRes (res?.data?.cars);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    }, []);
    
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

    // useEffect(() => {
    //     setLoading(true);
    //     axios.get(API.GET.ALLACTIVECARS+page, {
    //         'Contet-Type': 'application/json',
    //     })
    //         .then(res => {
    //             console.log(res);
    //             if(res?.data.state === 'success') {
                    // setCars(res?.data?.cars);
                    // if (category.includes(searchType)){
                    //     console.log(1);
                    //     SetRes(filterCarsByCategory(cars,searchType));
                    // }else if(brandsId.includes(searchType)){
                    //     console.log(2);
                    //     SetRes(filterCarsByBrand(cars,searchType))
                    // }else {
                    //     console.log(3);
                    //     SetRes(filterCarsByName(cars, searchType))
                    // }
                    // SetRes(filterCars(cars, searchType));
                    // setLoading(false);
    //             }
    //         })
    //         .catch(err => {
    //             setLoading(false);
    //         })
    // }, [page, pathname, searchType]);
    

    const filterCarsByBrand = (cars, brand) => {
        return cars?.filter(car => car.brand === brand);
    };

    const handleClick=(barndName)=>{
        SetRes(filterCarsByBrand(cars,barndName));
    }

    const filterCarsByCategory = (cars, category) => {
        return cars.filter(car => car.category === category);
      };
    
    const filterCars = (cars, name) => {
      return cars.filter(car => 
        car.name === name
       );
    };

    const pathParts = pathname.split('/');
    const lastWord = pathParts[pathParts.length - 1];

    


    useEffect(()=>{
        setSearchType(lastWord);
        // console.log (brandsName);
        // console.log(category)

        // axios.get(API.GET.ALLBRANDS, {
        //     'Contet-Type': 'application/json',
        // })
        //     .then(res => {
        //         if(res?.data.state === 'success') {
        //             setBrands(res?.data?.brands);
        //             brands.forEach(e => setBrandsId(prev => [...prev, e._id]))
        //             const names = brands.map(brand => brand.name);
        //             setBrandsName (names);
        //         }
        //     })
        //     .catch(err => {
        //         // setAgain(!again)
        //     })

        switch (true) {
            case brands.includes(lastWord):
                SetRes(filterCarsByBrand(cars, lastWord));
                break;
            case category.includes(lastWord):
                SetRes(filterCarsByCategory(cars, lastWord));
                break;
            case !brands.includes(lastWord) && !category.includes(lastWord):
                SetRes(filterCars(cars, lastWord));
                break;
        }
        

        // if (category.includes(lastWord)){
        //     SetRes(filterCarsByCategory(cars,lastWord));
        // }
        //  if(brandsName.includes(lastWord)){
        //     SetRes(filterCarsByBrand(cars,lastWord));
        // }else{
        //     SetRes(filterCars(cars,lastWord))
        // }

    },[pathname])

    const showAllCars =()=>{
        SetRes (cars);
    }

    return (
        <div className='relative w-full'>
            <Hero />
            <div className="mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] animate-left">
                {brands && brands?.map((e, i) => <div key={i} className="border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer scale-100" >
                        <div className="w-[100px] h-[100px]">
                            <img src={e.picture} onClick={()=>{handleClick(e.name)}} alt={e.name+' brand'} className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                    </div>)}
            </div>

            <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative mt-10`}>
                {Res?.length > 0 && Res?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            <ChangeTitle title={"MEI | Search Page"}/>
            
            {Res && Res?.length === 0 && <h2 className='text-center mt-10 mx-auto'>{notFound}</h2>}
            <div className="flex justify-center items-center pt-20">
                <button onClick={showAllCars}  className="cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]">
                    {seeButton}
                </button>
            </div>
            <Footer/>
            <SideLink />
        </div>
    );
}


export default SearchPage;