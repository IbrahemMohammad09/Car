import './dashBoardLoginPage.css'
import img from '../../images/dashBoardLogin/welcome.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import DashBoardWelcome from '../../component/dashBoardComponent/dashBoardWelcome/dashBoardWelcome';
import { useEffect,useState } from 'react';
import DashboardLogin from '../../component/dashBoardComponent/dashBoardLogin/dashBoardLogin'

function DashBoardLoginPage (){
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowFirst(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <Container>
            <Row>
                <Col lg={6}>
                    <img className='welcome-img' src={img}/>
                </Col>
                <Col lg={6}>
                    <div className={`first-element ${showFirst ? 'show' : 'hide'}`}>
                        <DashBoardWelcome />
                    </div>
                    <div  className={`second-element ${showFirst ? 'hide' : 'show'}`}>
                        <DashboardLogin />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DashBoardLoginPage;