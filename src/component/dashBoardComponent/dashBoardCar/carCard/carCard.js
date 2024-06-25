import './carCard.css'
import seatIcon from '../../../../images/carCards/seats.jpg'
import gearIcon from '../../../../images/carCards/gear.jpg'
import { Link } from 'react-router-dom';
import API, { url } from '../../../../constant/api';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaDollarSign, FaEdit, FaTrash, FaUser } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { FaGear } from 'react-icons/fa6';

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
                toast.error(err?.responser?.data?.message);
                setShowAlert(false)
            })
    }

    return(
        <div>
            <div className='w-full flex justify-between'>
                <div>
                    <h1 className='text-[1rem]'>{car.name}</h1>
                    <h2 className='text-[.8rem]'>{car.category}</h2>
                </div>
                <Link to={'/dashboard/edit/'+car._id}>
                    <BiEditAlt className='duration-300 hover:scale-110 cursor-pointer text-[1.5rem] text-green-700'/>
                </Link>
            </div>
            <div className='w-full h-[180px] rounded-md overflow-hidden hover:opacity-80 duration-500'>
                <Link className='cursor-pointer no-underline text-black' to={'/book-car/'+car._id}>
                    <img className='h-full w-full object-cover' src={'https://cars-carage.onrender.com/'+car.pictures[0]}/>
                </Link>
            </div>
            <div className='w-full mt-2 flex gap-4 justify-center'>
                <div className='flex justify-center items-center gap-2'>
                    <div className={`w-[16px] h-[16px] rounded-full ${car.available? 'bg-green-600':'bg-red-500'}`}/>
                    <span>{car.available? 'active': 'not-active'}</span>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaUser className='text-purple-600'/>
                    <span>{car.seatNumber}</span>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaGear className='text-purple-600'/>
                    <span>{car.gear}</span>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaDollarSign className='text-purple-600'/>
                    <span>{car.price.dayly} /d</span>
                </div>
                <div className='flex justify-center items-center gap-2 duration-300 hover:scale-110 cursor-pointer' onClick={() => handleDelete(car)}>
                    <FaTrash className='text-red-600'/>
                </div>
            </div>
            
            {showAlert && <div className='w-[400px] bg-white z-50 rounded-md absolute left-[50%] top-[20%] translate-x-[-50%] translate-y-[-50%] text-center px-3 py-5 z-40 border-[1px] border-__brown border-solid shadow-md shadow-[#ccc]'>
                <p>Are you sure you want delete this car:</p>
                <p className='mt-[-10px] font-bold'>{showAlert.name}</p>
                <div className='flex justify-center items-center gap-3'>
                    <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => deleteItem(showAlert._id)}>Yes</div>
                    <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => setShowAlert(false)}>No</div>
                </div>
            </div>}
        </div>
    );
}


export default CarCard