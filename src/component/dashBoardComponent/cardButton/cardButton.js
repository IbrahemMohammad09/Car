import './cardButton.css'


function CardButton ({icon , name}){

    return(
        <button>
            <img src={icon} />
            <p>{name}</p>
        </button>
    );
}

export default CardButton