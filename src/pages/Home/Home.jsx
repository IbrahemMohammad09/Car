import Hero from "../../component/HomeComponents/Hero/Hero"
import MainButton from "../../component/SharedComponents/MainButton/MainButton"
import MainTitle from "../../component/SharedComponents/MainTitle/MainTitle"
import MainCard from '../../component/SharedComponents/MainCard/MainCard'
import Img2 from '../../images/carCards/photo_2024-06-13_04-31-26.jpg'
const Home = () => {
    return (
        <section className="min-h-screen w-full bg-white">
            <Hero/>
            <MainButton name={'Load Now'}/>
            <MainTitle title={'Get your car now'}/>
            <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px]">
                {[1,2,3,4,5,6,7,8,9,10].map((e, i) => <MainCard key={i} daylyPrice={400} monthlyPrice={3000} weeklyPrice={1000} name={'Mercedes Benz'} pictures={[Img2, Img2, Img2]}/>)}
            </div>
        </section>
    )
}

export default Home