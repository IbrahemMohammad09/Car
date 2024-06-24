import './dashBoardLoginPage.css'
import img from '../../images/dashBoardLogin/welcome1.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import DashBoardWelcome from '../../component/dashBoardComponent/dashBoardWelcome/dashBoardWelcome';
import DashboardLogin from '../../component/dashBoardComponent/dashBoardLogin/dashBoardLogin'
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeTitle from '../../component/SharedComponents/ChangeTitle';




function DashBoardLoginPage (){
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFirst(false);
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    return(
        <Container className='dash-log'>
            <ChangeTitle title={"MEI | Log in"} />
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
                        <div className={`second-element  ${showFirst ? 'hide' : 'show'}`}>
                            <DashboardLogin />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DashBoardLoginPage;