import { useEffect, useState } from 'react';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import './searchPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import API from "../../constant/api"
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import MainButton from '../../component/SharedComponents/MainButton/MainButton';
import { t } from 'i18next';
import Loading from '../../component/SharedComponents/Loading/Loading';

function SearchPage (){
    const [searchType ,setSearchType] = useState ();//search on brand or catugry or name
    const [Res ,SetRes] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const category = ["Sport", "Luxury", "Family", "Economy", "Convertible"];
    const [brands, setBrands] = useState([]);
    const [brandsId, setBrandsId] = useState([]);
    const [page, setPage] = useState(1);

    const LoadMore =t("LoadMore");
    const notFound =t("noResults");

    const { pathname } = useLocation();

    useEffect(() => {
        axios.get(API.GET.ALLBRANDS, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setBrands(res?.data?.brands);

                    brands.forEach(e => setBrandsId(prev => [...prev, e._id]))
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);

    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLACTIVECARS+page, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                console.log(res);
                if(res?.data.state === 'success') {
                    setCars(res?.data?.cars);
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
                    SetRes(filterCars(cars, searchType));
                    setLoading(false);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    }, [page, pathname, searchType]);
    

    const filterCarsByBrand = (cars, brand) => {
        console.log('b',cars, brand)
        return cars?.filter(car => car.brand === brand);

    };
    const filterCarsByCategory = (cars, category) => {
        console.log(cars, category)
        return cars?.filter('c',car => car.category === category);
    };

    const filterCarsByName = (cars, name) => {
        console.log(cars, name)
        return cars?.filter('n',car => car.name === name);
    };

    const filterCars = (cars, name, brand, category) => {
        console.log(...cars);
        return cars?.filter(car => 
            car.name === name || 
            car.brand === brand ||
            car.category === category
        );
    };

    // console.log(pathname);

    // useEffect(()=>{
    // },[pathname, cars, loading])

    return (
        <div className='relative w-full'>
            <Hero />
                <Loading loading={loading} style={'absloute left-[50%] translate-x-[-50%]'}/>
            <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative mt-10`}>
                {Res?.length > 0 && Res?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            {Res && Res?.length === 0 && <h2 className='text-center mt-10 mx-auto'>{notFound}</h2>}
            {Res?.length !== 0 && <div onClick={() => setPage(page+=1)}><MainButton name={LoadMore}/></div>}
            <Footer/>
            <SideLink />
        </div>
    );
}


export default SearchPage;