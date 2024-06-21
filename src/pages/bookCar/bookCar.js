import Hero from '../../component/HomeComponents/Hero/Hero';
import './bookCar.css'
import car from '../../images/car.jpg'
import MainTitle from '../../component/SharedComponents/MainTitle/MainTitle';
import { Container,Row,Col } from 'react-bootstrap';

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
    return(
        <div>
            <Hero/>
            <MainTitle title={"Details Of Car"} />
            <Container>
                <Row>
                    <Col>
                        <img className='main-img' src={mainPic.img} />
                        {cars.map(car=>{
                            <div className='img-list' >
                                <img key={car.id} src={car.img} />
                            </div>
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default BookCar;