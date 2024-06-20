import { Container,Row } from 'react-bootstrap';
import './dashBoradSetting.css'
import { useState } from 'react';
import DashBoardDetails from './dashBoardDetails/dashBoardDetails';
import { Link } from 'react-router-dom';
import DashBoardCarPics from './dashBoardCarPics/dashBoardCarPics';


function DashBoardSetting (){
    const [activeComponent , setActiveComponent] = useState("setting");
    const switchComponent =()=>{
        switch(activeComponent){
            case "setting":
                return(
                    <DashBoardDetails/>
                );
            
            case "picture":
                return(
                    <DashBoardCarPics />
                );
            default:
                return(
                    <DashBoardDetails/>
                );
        }
    }
    return(
       <Container className='dash-setting'>

            <h1>Setting</h1>
            <button className='button-detail' onClick={()=>{setActiveComponent("setting")}}>Details</button>
            <button className='button-pics' onClick={()=>{setActiveComponent("picture")}}>Pictures</button>
            {switchComponent()}

       </Container>
    );
}


export default DashBoardSetting