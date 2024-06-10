import CardButton from '../dashBoardComponent/cardButton/cardButton';
import './homeDashBoard.css'
import carIc from '../../images/dashBoardLogin/carCard.jpg'


function HomeDashBoard (){
    const buttons =[
        {
            name : 'Add a car +',
            icon : carIc,
            url : ""
        },
        {
            name : 'View existing cars',
            icon : "",
            url : ""
        },
        {
            name : 'View Custimers cars',
            icon : "",
            url : ""
        },
    ]

    return(
        <div>
            {buttons.map(button=>(
                <CardButton name={button.name}  icon={button.icon}/>
            ))}
        </div>
    );
}

export default HomeDashBoard