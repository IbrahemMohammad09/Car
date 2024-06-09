import CardButton from '../dashBoardComponent/cardButton/cardButton';
import './homeDashBoard.css'
import carIc from '../../images/dashBoardLogin/carCard.jpg'


function HomeDashBoard (){
    const buttons =[
        {
            name : 'Add a car +',
            src : '../../../images/dashBoardLogin/carCard.jpg',
            url : ""
        },
        {
            name : 'View existing cars',
            src : "",
            url : ""
        },
        {
            name : 'View Custimers cars',
            src : "",
            url : ""
        },
    ]

    return(
        <div>
            {buttons.map(button=>(
                <CardButton name={button.name}  src={button.src}/>
            ))}
        </div>
    );
}

export default HomeDashBoard