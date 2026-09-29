import { Container,Row,Col } from 'react-bootstrap';
import Hero from '../../component/HomeComponents/Hero/Hero';
import './aboutUs.css'
import aboutCar from '../../images/aboutUs/aboutCar.jpg'
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import Footer from '../../component/SharedComponents/Footer/Footer';
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../animate.css';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import { FaCar } from 'react-icons/fa'
import { phone } from '../../constant/infoData';
import SEO from '../../component/SharedComponents/SEO/SEO';
import { MetaSEO } from '../../constant/MetaSEO';
import { useEffect } from 'react';



const carsHero = [
  {
      title: 'Sport',
      icon: <FaCar/>,
      url:"/search"
  },
  {
      title: 'Luxury',
      icon: <FaCar/>,
      url:"/search"
  },
  {
      title: 'Family',
      icon: <FaCar/>,
      url:"/search"
  },
  {
      title: 'Economy',
      icon: <FaCar/>,
      url:"/search"
  },
  {
      title: 'Convertible',
      icon: <FaCar/>,
      url:"/search"
  }
]

function AboutUs() {

  const [t,il8n]=useTranslation();
  const HomeTitle = t("HomeTitle");
  const { language } = useLanguageContext();

  useEffect(()=>{
    setTimeout(() => {
      window.scrollTo(0, 700)
    }, 800)
  },[])




    return (
      <div>
        <SEO 
             title={"Demo | About Us"}
             description={MetaSEO.aboutus.description}
             state={"index, follow"}
             keywords={MetaSEO.aboutus.keywords}
             name={"Demo Car Rental"}
             type={"website"}          
        />
        <Hero carsHero={carsHero}/>
        <Container className='about-info' dir={language === 'AR'? 'rtl':'ltr'}>
          <Row className='max-[600px]:text-center'>
            <Col lg={6}>
              <ScrollAnimation animateIn={language === 'AR'? 'slideInRight': 'slideInLeft'} animateOnce={false}>
                <img src={aboutCar} alt="About Car" />
              </ScrollAnimation>
            </Col>
            <Col className='info'>
              <ScrollAnimation animateIn={language === 'AR'? 'slideInLeft': 'slideInRight'} animateOnce={false}>
                <h2>{t("FooterTitle")}</h2>
                <p>{t("About")}</p>
                <hr />
                <h1 className='max-[600px]:justify-center max-[600px]:items-center '>{t("Contact")}</h1>
                <Row>
                  <Col className='contact max-[600px]:flex-col gap-2'>
                      <a href={'https://wa.me/'+phone} className="info-button "><FaWhatsapp />{t("WhatsApp")}</a>
                      <a href={'tel:'+phone} className="info-button "><FaPhone />{t("CallUs")}</a>
                  </Col>
                </Row>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='location'>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                <MainTitle title={HomeTitle} />
                <div className='loaction-title'>
                <span className='text-center text-white text-[1.8rem] font-bold'>{t("location")}</span>
                </div>  
              <div className="flex h-[280px] items-center justify-center bg-stone-100 text-2xl text-stone-500">
                Demo location — no real address
              </div>
            </ScrollAnimation>
          </Row>
        </Container>
        <Footer />
        <SideLink />
      </div>
    );
  }
  


export default AboutUs;
