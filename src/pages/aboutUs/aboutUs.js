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


function AboutUs() {
  const [t,il8n]=useTranslation();
  const HomeTitle = t("HomeTitle");

    return (
      <div>
        <ChangeTitle title={"MEI | About Us"} />
        <Hero />
        <Container className='about-info'>
          <Row>
            <Col lg={6}>
              <ScrollAnimation animateIn="slideInLeft" animateOnce={false}>
                <img src={aboutCar} alt="About Car" />
              </ScrollAnimation>
            </Col>
            <Col className='info'>
              <ScrollAnimation animateIn="slideInRight" animateOnce={false}>
                <h2>{t("FooterTitle")}</h2>
                <p>{t("About")}</p>
                <hr />
                <h1>{t("Contact")}</h1>
                <Row>
                  <Col className='contact'>
                      <Link to={'#'} className="info-button"><FaWhatsapp />Whats app</Link>
                      <Link to={'#'} className="info-button"><FaPhone />Call us</Link>
                  </Col>
                </Row>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='location'>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                <MainTitle title={HomeTitle} />
                <div className='loaction-title'>
                <p>{t("location")}</p>
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