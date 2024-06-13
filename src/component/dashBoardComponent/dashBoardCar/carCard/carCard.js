import './carCard.css'
import seatIcon from '../../../../images/carCards/seats.jpg'
import gearIcon from '../../../../images/carCards/gear.jpg'


function CarCard ({car}){

    return(
        <div className='car-card'>
            <h1>{car.name}</h1>
            <p>{car.type}</p>
            <img className='car-img' src={car.img}/>
            <div className='detaels'>
                <div className='seat'>
                    <img src={seatIcon}/>
                    <p>{car.seats}</p>
                </div>
                <div className='gear'>
                    <img src={gearIcon}/>
                    <p>{car.gear}</p>
                </div>
                <p className='price'><span>${car.price}</span>/d</p>
            </div>
            <div className='state'>
                <button className='edit'>Update</button>
                <button className='del'>Delete</button>
                <p>{car.state}</p>
            </div>
        </div>
    );
}


export default CarCard