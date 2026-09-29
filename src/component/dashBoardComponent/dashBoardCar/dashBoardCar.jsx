import './dashBoardCar.css' 
import searchIcon from '../../../images/dashBoardLogin/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container, ToastContainer  } from 'react-bootstrap';
import CarCard from './carCard/carCard';
import CarIcon from '../../../images/carCards/photo_2024-06-13_04-31-26.jpg'
import { useEffect, useState } from 'react';
import { getCars } from '../../../data/staticData';




function DashBoardCar (){
    const [cars, setCars] = useState(getCars);
    const [isDelete, setDelete] = useState(false);
    // Backend version retained: axios.get(API.GET.ALLCARS + page).then(res => setCars(res.data.cars));
    useEffect(() => setCars(getCars()), [isDelete]);

    return(
        <div className='dash-car'>
            <ToastContainer/>
            <Container className='px-0 mx-0'>
                <Row className='car-header '>
                    <Col>
                        <h1 className=''>Car list</h1>
                        <h1 className=''>قائمة السيارات</h1>
                    </Col>
                    <Col>
                        <div className="search-container ">
                            <button className="search-button" >
                                <img src={searchIcon} alt={'search icon'}/>
                            </button>
                            <input
                                type="search"
                                className="search-input"
                                placeholder="Search fo a type..."
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='car-list relative'>
                        {cars.map(car=> (
                            <Col key={car._id}>
                                <CarCard car={car} setDelete={setDelete} key={car.id} />
                            </Col>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
}


export default DashBoardCar
