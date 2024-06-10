import './cardButton.css'


function CardButton ({icon , name}){

    return(
        <button className='card-button'>
            <img src={icon} />
            <p>{name}</p>
        </button>
    );
}

export default CardButton