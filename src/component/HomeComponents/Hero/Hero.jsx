import { FaCar } from 'react-icons/fa'
import Img from '../../../images/Home/background@3x.png'
import Header from '../Header/Header'
import HeroInput from '../HeroInput/HeroInput'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';



const cars = [
    {
        title: 'Sport',
        icon: <FaCar/>
    },
    {
        title: 'Luxury',
        icon: <FaCar/>
    },
    {
        title: 'Family',
        icon: <FaCar/>
    },
    {
        title: 'Economy',
        icon: <FaCar/>
    },
    {
        title: 'Convertible',
        icon: <FaCar/>
    }
]
const   Hero = () => {
    const navigate = useNavigate();
    const [t , il8n] = useTranslation();

    
    
    return (
        <section className="h-screen relative">
            <img src={Img} alt={'Sport car in the mountain'} className="w-full h-full z-0 absolute left-0 top-0"/>
            <Header/>
            <div className='text-center flex flex-col justify-center items-center gap-[35px] relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
                <h1 className='text-white text-[1rem] font-normal max-[600px]:hidden'>{t("HeroH1")}</h1>
                <h2 className='text-white text-[3rem] md:text-[4.4rem] font-bold'>{t("HeroH2")}</h2>
                <HeroInput/>
                <h3 className='text-[15px] text-white font-normal mt-[20px]'>{t("HeroH3")}</h3>
                <div className='flex justify-center items-center gap-[10px] flex-wrap'>
                    {cars.map((e, i) => <div onClick={()=>{navigate('/search/'+e.title)}} key={i} className='bg-__opacity_white rounded-[44px] py-[13px] px-[31px] flex items-center gap-[8px] text-white duration-300 hover:bg-__brown cursor-pointer shadow-sm shadow-[#ccc] max-[600px]:py-2'>{e.icon} {e.title}</div>)}
                </div>
            </div>
        </section>
    )
}

export default Hero