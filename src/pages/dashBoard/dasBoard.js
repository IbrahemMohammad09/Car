import './dashBoard.css'
import homeIcon from '../../images/dashBoardLogin/home.png'
import carIcon from '../../images/dashBoardLogin/car.png'
import wheelIcon from '../../images/dashBoardLogin/car-wheel.png'
import user from '../../images/dashBoardLogin/user.png'
import HomeDashBoard from '../../component/homeDashBoard/homeDashBoard'

function DashBoard (){


    return (
        <div className='bashboard'>
            <div className='sidebar'>
                <div className='icons'>
                    <img className='icon-dashboard' src={homeIcon} />
                    <img className='icon-dashboard' src={carIcon} />
                    <img className='icon-dashboard' src={wheelIcon} />
                    <img className='icon-dashboard' src={user} />
                </div>
            </div>
            <div>
                <HomeDashBoard />
            </div>
        </div>
    );
}


export default DashBoard