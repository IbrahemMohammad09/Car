import Hero from '../../component/HomeComponents/Hero/Hero';
import './bookCar.css'
import car from '../../images/car.jpg'
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle';
import { Container,Row,Col } from 'react-bootstrap';
import Footer from '../../component/SharedComponents/Footer/Footer';
import SideLink from '../../component/SharedComponents/sideLink/sideLink';
import MainButton from '../../component/SharedComponents/MainButton/MainButton';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../animate.css';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';


function BookCar (){
    const cars =[
        {
            id:1,
            img:car
        },
        {
            id:2,
            img:car
        },
        {
            id:3,
            img:car
        },
        {
            id:4,
            img:car
        },
        {
            id:5,
            img:car
        },
        {
            id:6,
            img:car
        },
        {
            id:7,
            img:car
        },
    ]
    const mainPic = cars[0];
    const restPic = cars.slice(1);
    return(
        <div>
            <ChangeTitle title={"MEI | Book Your Car"} />
            <Hero/>
            <MainTitle title={"Details Of Car"} />
            <Container>
                <Row>
                    <Col>
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={false}>
                        <img src={mainPic.img} className='main-img' />
                        <div className="image-gallery">
                            {restPic.map((car) => (
                                <div key={car.id} className="image-container">
                                <img src={car.img} alt={`Car ${car.id}`} className="gallery-image" />
                                </div>
                            ))}
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col className='car-details'>
                    <ScrollAnimation animateIn="slideInRight" animateOnce={false}>
                        <h1>BMW-M3</h1>
                        <h2>NISMO has become the embodiment of Nissan's outstanding performance, 
                            inspired by the most unforgiving proving ground, the "race track".</h2>
                        <Row >
                            <Col className='row-details' >
                                <p><span>Category</span>sport</p>
                                <p><span>Gear Box</span>Manual</p>
                                <p><span>Brand</span>BMW</p>
                                <p><span>Model</span>2022</p>
                            </Col>
                            <Col>
                                <p><span>Seats</span>6 person</p>
                                <p><span>Gear Box</span>Manual</p>
                                <p><span>Speed</span>150 Km/h</p>
                                <p><span>Engine cylinders</span>5</p>
                            </Col>
                            <hr/>  
                        </Row>
                        <Row>
                            <Col className='row-details'>
                                <p><span>Daily</span>40 $</p>
                                <p><span>Monthly</span>200 $</p>
                            </Col>
                            <Col><p><span>Weekly</span>80 $</p></Col>
                        </Row>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <ScrollAnimation animateIn="slideInUp" animateOnce={false}>
                    <MainTitle title={"Book your car now"} />
                    <Container>
                        <form>
                            <Row  >
                                <Col className='book-form' >
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type='text' placeholder='Your name'/>
                                    </div>
                                    <div>
                                        <label htmlFor="startdate">Start Date</label>
                                        <input id="startdate" type='date'/>
                                    </div>
                                </Col>
                                <Col className='book-form'>
                                    <div>
                                        <label htmlFor="phonenumber">Phone Number</label>
                                        <input id="phonenumber" type='text' placeholder='Your phone number'/>
                                    </div>
                                    <div>
                                        <label htmlFor="enddate">End Date</label>
                                        <input id="enddate" type='date'/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <div className='book-button'>
                                <MainButton name="Book Your Car Now"/>
                            </div>
                            </Row>
                        </form>
                    </Container>
                </ScrollAnimation>
            </Container>
            
            <Footer />
            <SideLink />
        </div>
    );
}



export default BookCar;