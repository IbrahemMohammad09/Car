import './cardButton.css'


function CardButton ({src , name}){

    return(
        <button>
            <img src={src} />
            <p>{name}</p>
        </button>
    );
}

export default CardButton