import { useEffect, useState } from 'react';
import Hero from '../../component/HomeComponents/Hero/Hero';
import Footer from '../../component/SharedComponents/Footer/Footer';
import './searchPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import API from "../../constant/api"
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';


function SearchPage (){
    const [searchType ,setSearchType] = useState ();//search on brand or catugry or name
    const [res ,SetRes] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const category = ["sport", "luxury", "family", "economy", "convertible"];
    const [brands, setBrands] = useState([]);



    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLACTIVECARS+1, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
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
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);

    const filterCarsByBrand = (cars, brand) => {
        return cars.filter(car => car.brand === brand);

    };
    const filterCarsByCategory = (cars, category) => {
        return cars.filter(car => car.category === category);
      };
    const filterCars = (cars, name, model, category) => {
      return cars.filter(car => 
        car.name === name && 
        car.model === model && 
        car.category === category
       );
    };

    const pathname = useLocation;
    useEffect(()=>{
        setSearchType(pathname);

        if (category.includes(searchType)){
            SetRes(filterCarsByCategory(cars,searchType));
        }else if(brands.includes(searchType)){
            SetRes(filterCarsByBrand(cars,searchType))
        }else {
            navigate("/");
        }

    },[pathname])

    

    return (
        <div>
            <Hero />
                {cars && !loading && cars?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            <Footer/>
            <SideLink />
        </div>
    );
}


export default SearchPage;