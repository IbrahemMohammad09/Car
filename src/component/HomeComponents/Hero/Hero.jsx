import { FaCar } from 'react-icons/fa'
import Img from '../../../images/Home/Ford Shelby GT350.jpeg'
import Header from '../Header/Header'
import HeroInput from '../HeroInput/HeroInput'

const cars = [
    {
        title: 'Suv',
        icon: <FaCar/>
    },
    {
        title: 'Sedan',
        icon: <FaCar/>
    },
    {
        title: 'HatchBack',
        icon: <FaCar/>
    },
    {
        title: 'Coupe',
        icon: <FaCar/>
    },
    {
        title: 'Hybrid',
        icon: <FaCar/>
    }
]
const   Hero = () => {
    return (
        <section className="h-screen relative">
            <img src={Img} alt={'Sport car in the mountain'} className="w-full h-full z-0 absolute left-0 top-0"/>
            <Header/>
            <div className='text-center flex flex-col justify-center items-center gap-[35px] relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
                <h1 className='text-white text-[1rem] font-normal'>Find cars for sale and for rent near you</h1>
                <h2 className='text-white text-[4.4rem] font-bold'>Find Your Perfect Car</h2>
                <HeroInput/>
                <h3 className='text-[15px] text-white font-normal mt-[20px]'>Or Browse Featured Model</h3>
                <div className='flex justify-center items-center gap-[10px] flex-wrap'>
                    {cars.map((e, i) => <div key={i} className='bg-__opacity_white rounded-[44px] py-[13px] px-[31px] flex items-center gap-[8px] text-white duration-300 hover:bg-__brown cursor-pointer shadow-sm shadow-[#ccc]'>{e.icon} {e.title}</div>)}
                </div>
            </div>
        </section>
    )
}

export default Hero