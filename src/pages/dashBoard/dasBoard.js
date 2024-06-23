import './dashBoard.css'
import { useState } from 'react'
import homeIcon from '../../images/dashBoardLogin/home.png'
import carIcon from '../../images/dashBoardLogin/car.png'
import wheelIcon from '../../images/dashBoardLogin/car-wheel.png'
import user from '../../images/dashBoardLogin/user.png'
import wheel from '../../images/dashBoardLogin/wheelCard.jpg'
import profile from '../../images/dashBoardLogin/profileCrad.jpg'
import car from '../../images/dashBoardLogin/welcome1.jpg'
import DashBoardCar from '../../component/dashBoardComponent/dashBoardCar/dashBoardCar'
import DashBoardCustomerCar from '../../component/dashBoardComponent/dasBoardCustomerCar/dasBoardCustomerCar'
import DashBoardSetting from '../../component/dashBoardComponent/dashBoradSetting/dashBoradSetting'
import ChangeTitle from '../../component/SharedComponents/ChangeTitle'


function DashBoard (){

    const sidBare = () => {
        return(
            <div className='sidebar'>
                <div className='icons'>
                    <a href='#' onClick={()=>setActiveComponent('home')}><img className='icon-dashboard' src={homeIcon} /></a>
                    <a href='#' onClick={()=>setActiveComponent('carlist')}><img className='icon-dashboard' src={carIcon} /></a>
                    <a href="#" onClick={()=>setActiveComponent('setting')}><img className='icon-dashboard' src={wheelIcon} /></a>
                    <a href='#' onClick={()=>setActiveComponent('customer car')}><img className='icon-dashboard' src={user} /></a>
                </div>
            </div>
        );
    }
    const homeDashBoard=()=>{
        return(
        <div className='home-dashboard'>
            <ChangeTitle title={"MEI | Dashboard"} />
            <div className='buttons'>
            <button className='card-button' onClick={()=>setActiveComponent('setting')}>
                        <img src={wheel} />
                        <p>Add car +</p>
                        <p>أضف سيارة</p>
                    </button>
                    
                    <button className='card-button' onClick={()=>setActiveComponent('carlist')}>
                        <img src={wheel} />
                        <p>View existing cars</p>
                        <p>عرض قائمة بالسيارات الحالية</p>
                    </button>
                    <button className='card-button' onClick={()=>setActiveComponent('customer car')}>
                        <img src={profile} />
                        <p>View customer cars</p>
                        <p>عرض طلبات الزبائن </p>
                    </button>
            </div>
            <img className='home-img' src={car}/>
        </div>
        );
    }

    const [activeComponent, setActiveComponent] = useState('home');
    const renderComponent = () => {
        switch (activeComponent) {
          case 'carlist':
            return (
                <div className='dashboard'>
                    {sidBare()}
                    <DashBoardCar />
                </div>
                );
          case 'customer car':
            return (
                <div className='dashboard'>
                    {sidBare()}
                    <DashBoardCustomerCar />
                </div>
                );
          case 'setting':
            return (
                <div className='dashboard'>
                    {sidBare()}
                    <DashBoardSetting />
                </div>
            );
            
          default:
            return (
                <div className='dashboard'>
                    {sidBare()}
                    {homeDashBoard()}
                </div>
            );
        }
      };
    


    return (
        <div>
            {renderComponent()}
        </div>
    );
    
}


export default DashBoard