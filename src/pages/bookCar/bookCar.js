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
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import API from '../../constant/api';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import MainCard from '../../component/SharedComponents/MainCard/MainCard';
import Loading from '../../component/SharedComponents/Loading/Loading';
import Err from '../../component/SharedComponents/Error/Error';


function BookCar (){
    const [isVisible, setIsVisible] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { language } = useLanguageContext();

    const to = useNavigate();

    const { id } = useParams();

    const [car, setCar] = useState();
    const [other, setOther] = useState([]);

    const elementRef = useRef(null)

    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ONECAR+id)
            .then(res => {
                console.log(1,res);
                if(res?.data.state === 'success') {
                    setCar(res?.data?.car);
                    setOther(res?.data?.other?.otherCars);
                    setLoading(false);
                }
            })
            .catch(err => {
                if(err?.response?.data?.state === 'failed') {
                    setLoading(false);
                    to('/error');
                }
            })
    }, []);

    useEffect(() => {
        const handleScroll = () => {
        const e1 = elementRef?.current?.getBoundingClientRect();

        const viewportHeight = window?.innerHeight;
        if (e1?.top <= viewportHeight / 1.1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const handleBook = async () => {
        if(loading) {
            return;
        }

        setLoading(true);
        setError(false);

        axios.post(API.POST.BOOKING+id, {
            phone,
            name,
            start: startDate,
            end: endDate
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    setLoading(false);
                    to('/');
                }
            })
            .catch(err => {
                if(err?.response?.data?.state === 'failed') {
                    setLoading(false);
                    setError(err?.response?.data?.message);
                }
            })
    }

    return(
        <div>
            <Hero/>
            <MainTitle title={"Details Of Car"} />
            {
            car &&
            <Container>
                <Row>
                    <Col>
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={false}>
                        <img src={car.pictures[0]} className='main-img' />
                        <div className="image-gallery">
                            {car.pictures.map((car, i) => ( i !== 0 &&
                                <div key={i} className="image-container">
                                    <img src={car} alt={`Car ${car.id}`} className="gallery-image" />
                                </div>
                            ))}
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col className='car-details'>
                    <ScrollAnimation animateIn="slideInRight" animateOnce={false}>
                        <h1>{car && car?.name}</h1>
                        <h2>{car && car?.description[language]}</h2>
                        <Row >
                            <Col className='row-details' >
                                <p><span>Category</span>{car.category.language}</p>
                                <p><span>Gear Box</span>{car.gear}</p>
                                <p><span>Brand</span>{car.brand}</p>
                                <p><span>Model</span>{car.model}</p>
                            </Col>
                            <Col>
                                <p><span>Seats</span>{car.seatNumber}</p>
                                <p><span>Gear Box</span>{car.gear}</p>
                                <p><span>Speed</span>{car.topSpeed}</p>
                                <p><span>Engine cylinders</span>{car.horse}</p>
                            </Col>
                            <hr/>  
                        </Row>
                        <Row>
                            <Col className='row-details'>
                                <p><span>Daily</span>{car.price.dayly} AUD</p>
                                <p><span>Monthly</span>{car.price.monthly} AUD</p>
                            </Col>
                            <Col><p><span>Weekly</span>{car.price.weekly} AUD</p></Col>
                        </Row>
                    </ScrollAnimation>
                    </Col>
                </Row>
                <ScrollAnimation animateIn="slideInUp" animateOnce={false}>
                    <MainTitle title={"Book your car now"} />
                    <Container>
                        <form>
                            <Row>
                                <Col className='book-form' >
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="startdate">Start Date</label>
                                        <input id="startdate" type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                                    </div>
                                </Col>
                                <Col className='book-form'>
                                    <div>
                                        <label htmlFor="phonenumber">Phone Number</label>
                                        <input id="phonenumber" type='text' placeholder='Your phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="enddate">End Date</label>
                                        <input id="enddate" type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                                    </div>
                                </Col>
                                <Err err={error}/>
                            </Row>
                            <Row>
                            <div className='book-button' onClick={handleBook}>
                                <MainButton name="Book Your Car Now"/>
                            </div>
                            </Row>
                        </form>
                    </Container>
                </ScrollAnimation>

            </Container>
            }
                <div ref={elementRef} className={`${isVisible && 'animate-right'} mt-5`}>
                    <MainTitle title={'See other cars'}/>
                    <div className={`container mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1300px]:grid-cols-3 gap-[47px]`}>
                        {other && other?.map((e, i) => <MainCard key={i} daylyPrice={e.price.dayly} monthlyPrice={e.price.monthly} weeklyPrice={e.price.weekly} name={e.name} pictures={e.pictures} id={e._id}/>)}
                    </div>
                </div>
            <Footer />
            <SideLink />
        </div>
    );
}



export default BookCar;