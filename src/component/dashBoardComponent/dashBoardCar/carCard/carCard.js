import './carCard.css'
import seatIcon from '../../../../images/carCards/seats.jpg'
import gearIcon from '../../../../images/carCards/gear.jpg'
import { Link } from 'react-router-dom';
import API, { url } from '../../../../constant/api';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


function CarCard ({car, setDelete}){
    const [showAlert, setShowAlert] = useState(false);

    const token = localStorage.getItem('token')

    const handleDelete = async (car) => {
        setShowAlert(car)
    }

    const deleteItem = async (id) => {
        axios.delete(API.DELETE.CAR+id, {
            headers: {
                Authorization: 'Bearer '+ token
            }
        })
            .then(res => {
                toast.success(res?.data?.message);
                setDelete(id);
                setShowAlert(false)
            })
            .catch(err => {
                toast.success(err?.responser?.data?.message);
                setShowAlert(false)
            })
    }

    return(
        <div className='car-card relative'>
            <h1>{car.name}</h1>
            {/* <p>{car.category}</p> */}
            <img className='car-img' src={'http://localhost:3000/uploads/cars/'+car.pictures[0]}/>
            <div className='detaels'>
                <div className='seat'>
                    <img src={seatIcon}/>
                    <p>{car.seatNumber}</p>
                </div>
                <div className='gear'>
                    <img src={gearIcon}/>
                    <p>{car.gear}</p>
                </div>
                <p className='price'><span>${car.price.dayly}</span>/d</p>
            </div>
            <div className='state'>
                <Link to={'/dashboard/edit/'+car._id} className='block no-underline text-white p-1 px-2 rounded-md bg-green-400 me-2'>Update</Link>
                <Link className='block no-underline text-white p-1 px-2 rounded-md bg-red-400' onClick={() => handleDelete(car)}>Delete</Link>
                <p>{car.available}</p>
            </div>
            {showAlert && <div className='w-[400px] bg-white rounded-md absolute left-[50%] top-[50%] translate-[-50%] text-center px-3 py-5 z-40 border-[1px] border-__brown border-solid'>
                <p>Ary you sure you want delete this car: {showAlert.name}</p>
                <div className='flex justify-center items-center gap-3'>
                    <div className='cursor-pointer p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => deleteItem(showAlert._id)}>Yes</div>
                    <div className='cursor-pointer p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => setShowAlert(false)}>No</div>
                </div>
            </div>}
        </div>
    );
}


export default CarCard