import { Container,Row,Col } from 'react-bootstrap';
import Hero from '../../component/HomeComponents/Hero/Hero';
import './aboutUs.css'
import aboutCar from '../../images/aboutUs/aboutCar.jpg'
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";
import Footer from '../../component/SharedComponents/Footer/Footer';
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../animate.css';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import { FaCar } from 'react-icons/fa'
import { phone } from '../../constant/infoData';

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

    return (
      <div>
        <ChangeTitle title={"MEI | About Us"} />
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
                <h1 >{t("Contact")}</h1>
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
              <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.266808322186!2d55.28676497622934!3d25.19422327771291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69360c85e4a3%3A0x15cdd1b9539998ca!2sMeem%20Rent%20A%20Car%20in%20Dubai%20UAE%20-%20Economy%20Sedan%20Convertible%20SUV%20Commercial%20Pick%20up%20Van%20Bus!5e0!3m2!1sen!2siq!4v1718938272931!5m2!1sen!2siq"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Map"
                ></iframe>
            </ScrollAnimation>
          </Row>
        </Container>
        <Footer />
        <SideLink />
      </div>
    );
  }
  


export default AboutUs;