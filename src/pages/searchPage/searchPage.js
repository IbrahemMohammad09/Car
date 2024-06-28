import { useEffect, useState } from 'react';
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
    const [isVisible, setIsVisible] = useState();
    const currentLocation = useLocation();
    const [searchType ,setSearchType] = useState ();
    const [res ,SetRes] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);
    const category = ["Sport", "Luxury", "Family", "Economy", "Convertible"];
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
        console.log (cars);
      };
    const filterCars = (cars, name, model, category) => {
      return cars.filter(car => 
        car.name === name && 
        car.model === model && 
        car.category === category
       );
    };

    const pathname = currentLocation.pathname;
    const pathParts = pathname.split('/');
    const lastWord = pathParts[pathParts.length - 1];

    useEffect(()=>{
        setSearchType(lastWord);


        if (category.includes(lastWord)){
            console.log(lastWord);
            SetRes(filterCarsByCategory(cars,lastWord));
        }
        if(brands.includes(lastWord)){
            SetRes(filterCarsByBrand(cars,lastWord))
        }else {
            // navigate("/search/:name");
        }

    },[pathname])

    const showAllCars =()=>{
        SetRes (cars);
    }


    

    return (
        <div>
            <Hero />
            <ChangeTitle title={"MEI | Search Page"} />

            <div className="mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] animate-left">
                {brands && brands?.map((e, i) => <div key={i} className="border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer scale-100" >
                        <div className="w-[100px] h-[100px]">
                            <img src={'http://meirentacar.com/'+e.picture} onClick={()=>{navigate('/search/'+e.name)}} alt={e.name+' brand'} className="w-full h-full object-cover"/>
                        </div>
                        <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                    </div>)}
            </div>
            <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] relative pt-20`}>
                {res && !loading && res?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            <div className="flex justify-center items-center pt-20">
                <button onClick={showAllCars}  className="cursor-pointer border-[1px] border-solid border-__brown bg-__brown text-white text-[1rem] font-bold leading-[25.8px] rounded-sm block no-underline duration-300 opacity-90 hover:opacity-100 w-fit py-[10px] px-[30px]">See All Cars</button>
            </div>
            <Footer/>
            <SideLink />
        </div>
    );
}


export default SearchPage;