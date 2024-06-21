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



function AboutUs() {
    return (
      <div>
        <Hero />
        <Container className='about-info'>
          <Row>
            <Col>
              <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                <img src={aboutCar} alt="About Car" />
              </ScrollAnimation>
            </Col>
            <Col className='info'>
              <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <h2>MEI Car Rentals Dubai</h2>
                <p> Car Rental, where we offer the latest cars at competitive prices and excellent customer service. 
                    Enjoy a smooth and comfortable rental experience with us. Book now to discover the difference!</p>
                <hr />
                <h1>Contact US</h1>
                <Row>
                  <Col className='contact'>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      <Link to={'#'} className="info-button"><FaWhatsapp />Whats app</Link>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                      <Link to={'#'} className="info-button"><FaPhone />Call us</Link>
                    </ScrollAnimation>
                  </Col>
                </Row>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='location'>
            <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                <MainTitle title={"Best Car Rental DUBAI"} />
                <div className='loaction-title'>
                <p>OUR Location</p>
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
      </div>
    );
  }
  


export default AboutUs;