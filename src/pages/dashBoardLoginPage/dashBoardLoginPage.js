import './dashBoardLoginPage.css'
import img from '../../images/dashBoardLogin/welcome1.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import DashBoardWelcome from '../../component/dashBoardComponent/dashBoardWelcome/dashBoardWelcome';
import { useEffect,useState } from 'react';
import DashboardLogin from '../../component/dashBoardComponent/dashBoardLogin/dashBoardLogin';
import 'bootstrap/dist/css/bootstrap.min.css';


function DashBoardLoginPage (){
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowFirst(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <Container className='dash-log'>
            <Row>
                <Col xs={12} md={6}>
                    <div>
                        <img className='welcome-img' src={img}/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='left-side'>
                        <div className={`first-element ${showFirst ? 'show' : 'hide'}`}>
                            <DashBoardWelcome />
                        </div>
                        <div  className={`second-element ${showFirst ? 'hide' : 'show'}`}>
                            <DashboardLogin />
                        </div>
                        
                        {/* <DashBoardWelcome /> */}
                        {/* <DashboardLogin /> */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DashBoardLoginPage;