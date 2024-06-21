import './dashBoardCar.css' 
import searchIcon from '../../../images/dashBoardLogin/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container  } from 'react-bootstrap';
import CarCard from './carCard/carCard';
import CarIcon from '../../../images/carCards/photo_2024-06-13_04-31-26.jpg'




function DashBoardCar (){
    const cars =[
        {
            id:1,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'Manual',
            price :300,
            state:'active',
        },
        {
            id:2,
            name: 'BMW',
            img : CarIcon,
            type: 'sedan',
            seats:4,
            gear: 'Manual',
            price :400,
            state:'active',
        },
        {
            id:3,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'auto',
            price :350,
            state:'active',
        },
        {
            id:4,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'Manual',
            price :300,
            state:'active',
        },
        {
            id:5,
            name: 'BMW',
            img : CarIcon,
            type: 'sedan',
            seats:4,
            gear: 'Manual',
            price :400,
            state:'active',
        },
        {
            id:6,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'auto',
            price :350,
            state:'active',
        },
        {
            id:7,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'Manual',
            price :300,
            state:'active',
        },
        {
            id:8,
            name: 'BMW',
            img : CarIcon,
            type: 'sedan',
            seats:4,
            gear: 'Manual',
            price :400,
            state:'active',
        },
        {
            id:9,
            name: 'BMW',
            img : CarIcon,
            type: 'coupe',
            seats:4,
            gear: 'auto',
            price :350,
            state:'active',
        },
    ]    
    
    return(
        <div className='dash-car'>
            <Container>
                <Row className='car-header '>
                    <Col>
                        <h1 className=''>Car list</h1>
                        <h1 className=''>قائمة السيارات</h1>
                    </Col>
                    <Col>
                        <div className="search-container ">
                            <button className="search-button" >
                                <img src={searchIcon} />
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
                    <div className='car-list'>
                        {cars.map(car=> (
                            <Col>
                                <CarCard car={car} key={car.id} />
                            </Col>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
}


export default DashBoardCar