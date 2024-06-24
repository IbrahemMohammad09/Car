import './dashBoardCar.css' 
import searchIcon from '../../../images/dashBoardLogin/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col, Container, ToastContainer  } from 'react-bootstrap';
import CarCard from './carCard/carCard';
import CarIcon from '../../../images/carCards/photo_2024-06-13_04-31-26.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../../constant/api';
import Loading from '../../SharedComponents/Loading/Loading';




function DashBoardCar (){
    const [cars, setCars] = useState([]);
    const [isDelete, setDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLCARS+page, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    }, [isDelete]);

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
                    <div className='car-list relative'>
                        <Loading loading={loading} style={'absolute left-[50%] top-[50%] translate-x-[-50%]'}/>
                        {!loading && cars && cars?.map(car=> (
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