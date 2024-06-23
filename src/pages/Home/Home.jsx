import Hero from "../../component/HomeComponents/Hero/Hero"
import MainButton from "../../component/SharedComponents/MainButton/MainButton"
import MainTitle from "../../component/SharedComponents/MainTitle/MainTitle"
import MainCard from '../../component/SharedComponents/MainCard/MainCard'
// import Img2 from '../../images/carCards/photo_2024-06-13_04-31-26.jpg'
import Slider from "react-slick"
import { useEffect, useRef, useState } from "react"
import Img from '../../images/Home/Paragraph+Background+Border (1).png'
import Img1 from '../../images/Home/Paragraph+Background+Border (2).png'
import Img3 from '../../images/Home/Paragraph+Background+Border (3).png'
// import Img4 from '../../images/Home/Paragraph+Background+Border (4).png'
import Footer from "../../component/SharedComponents/Footer/Footer"
import { FaMessage } from "react-icons/fa6"
import Img5 from '../../images/Home/unsplash_UF2nwAcD8Mo.png'
// import BrandImg1 from '../../images/Home/b1.jpg.png'
// import BrandImg2 from '../../images/Home/b2.jpg.png'
// import BrandImg3 from '../../images/Home/b3.jpg.png'
// import BrandImg4 from '../../images/Home/b4.jpg.png'
// import BrandImg5 from '../../images/Home/b5.jpg.png'
// import BrandImg6 from '../../images/Home/b6.jpg.png'
// import { FaPhone, FaWhatsapp } from "react-icons/fa"
import SideLink from "../../component/SharedComponents/sideLink/sideLink"
import axios from "axios"
import API from "../../constant/api"

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
        img: Img3,    
    },
    {
        title: 'Economy', 
        img: Img,    
    },
];

const arr = [
    {
        title: 'Deals for every budget',
        subtitle: 'Provide rental options for various time periods as per customer requirements.',
        icon: <FaMessage className="text-white"/>
    },
    {
        title: 'Best price guaranteed',
        subtitle: "Find a lower price? We’ll refund you 100% of the difference.",
        icon: <FaMessage className="text-white"/>
    },
    {
        title: "24-hours services",
        subtitle: "Provide 24-hour emergency assistance services to provide support if customers encounter problems during rentals.",
        icon: <FaMessage className="text-white"/>
    },
]

// const brands = [
//     {
//         title: 'Audi',
//         img: BrandImg1
//     },
//     {
//         title: 'BMW',
//         img: BrandImg2
//     },
//     {
//         title: 'Ford',
//         img: BrandImg3
//     },
//     {
//         title: 'Mercedes Benz',
//         img: BrandImg4
//     },
//     {
//         title: 'Peugeot',
//         img: BrandImg5
//     },
//     {
//         title: 'Volkswagen',
//         img: BrandImg6
//     },
// ]
const Home = () => {
    const [type, setType] = useState([]);
    const [brand, setBrand] = useState();
    const [isVisible, setIsVisible] = useState();
    const [isVisible1, setIsVisible1] = useState();
    const [isVisible2, setIsVisible2] = useState();
    const [isVisible3, setIsVisible3] = useState();
    const [isVisible4, setIsVisible4] = useState();

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    const [cars, setCars] = useState([]);
    // const [again2, setAgain2] = useState(false);

    useEffect(() => {
        axios.get(API.GET.ALLCARS+1, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setCars(res?.data?.cars);
                }
            })
            .catch(err => {
                // setAgain2(!again2)
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

        if (e4.top <= viewportHeight / 1.1) {
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

    return (
        <section className="min-h-screen w-full bg-white overflow-x-hidden">
            <Hero/>

            <MainTitle title={'Best Car Rental DUBAI'}/>
            <div className={`w-full ${isVisible4 && 'animate-right'}`} ref={elementRef4}>
                <Slider {...settings} className="p-1">
                    {cards.map((e, i) => <div key={i} className="h-[441px] relative overflow-hidden">
                        <img src={e.img} alt={e.title + 'slide' + i} onClick={() => setType(prev => [...prev, e.title])} className={`w-full h-full object-contain mx-[20px] duration-300 hover:scale-105 cursor-pointer ${type.includes(e.title)? 'opacity-100':'opacity-80'}`}/>
                    </div>)}
                </Slider>
            </div>

            <div ref={elementRef} className={`mx-auto container flex justify-center items-center flex-wrap gap-[30px] mt-[100px] ${isVisible && 'animate-left'}`}>
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer ${brand === e.name? 'scale-95': 'scale-100'}`} onClick={() => setBrand(e.name)}>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture} alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
            </div>

            <MainTitle title={'Popular car'}/>
            <div ref={elementRef3} className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px] ${isVisible3 && 'animate-right'}`}>
                {cars && cars?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
            </div>
            <div className="mx-auto text-center w-fit mt-[40px]">
                <MainButton name={'Load More'}/>
            </div>

            <MainTitle title={'Why Choose us?'}/>
            <div className="bg-__dark_white py-[65px] px-[100px] flex justify-center w-full gap-[50px] items-center container mx-auto max-[991px]:flex-col">
                <div className={`h-[687px] w-[524px] max-[600px]:w-full ${isVisible1 && 'animate-left'}`} ref={elementRef1}>
                    <img src={Img5} alt={'Sport car with orange color'} className="w-full h-full object-fit"/>
                </div>
                <div ref={elementRef2} className={`${isVisible2 && 'animate-right'}`}>
                    <h1 className="text-__brown text-[2.5rem] leading-[55px] font-medium min-[992px]:w-[300px] max-[500px]:text-center">Feel the best experience with our deals.</h1>
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