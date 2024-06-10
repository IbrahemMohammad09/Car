import CardButton from '../dashBoardComponent/cardButton/cardButton';
import './homeDashBoard.css'
import carIc from '../../images/dashBoardLogin/carCard.jpg'
import wheel from '../../images/dashBoardLogin/wheelCard.jpg'
import profile from '../../images/dashBoardLogin/profileCrad.jpg'
import car from '../../images/dashBoardLogin/welcome1.jpg'


function HomeDashBoard (){
    const buttons =[
        {
            name : 'Add a car +',
            icon : carIc,
            url : ""
        },
        {
            name : 'View existing cars',
            icon : wheel,
            url : ""
        },
        {
            name : 'View customer cars',
            icon : profile,
            url : ""
        },
    ]

    return(
        <div className='home-dashboard'>
            <div className='buttons'>
                {buttons.map(button=>(
                    <CardButton name={button.name}  icon={button.icon}/>
                ))}
            </div>
            <img className='home-img' src={car}/>
        </div>
    );
}

export default HomeDashBoard