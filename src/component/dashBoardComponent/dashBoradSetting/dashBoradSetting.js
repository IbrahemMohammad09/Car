import { Button, Container,Row } from 'react-bootstrap';
import './dashBoradSetting.css'
import { useEffect, useState } from 'react';
import DashBoardDetails from './dashBoardDetails/dashBoardDetails';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashBoardCarPics from './dashBoardCarPics/dashBoardCarPics';
import axios from 'axios';
import API from '../../../constant/api';
import { ToastContainer, toast } from 'react-toastify';


function DashBoardSetting (){
    const [page, setPage] = useState('details');

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [pictures, setPictures] = useState([]);
    const [dayly, setDayly] = useState();
    const [monthly, setMonthly] = useState();
    const [weekly, setWeekly] = useState();
    const [descAr, setDescAr] = useState();
    const [descEn, setDescEn] = useState();
    const [horse, setHorse] = useState();
    const [model, setModel] = useState();
    const [seatNumber, setSeatNumber] = useState();
    const [topSpeed, setTopSpeed] = useState();
    const [gear, setGear] = useState();
    const [color, setColor] = useState();

    const { id } = useParams();

    const to = useNavigate();

    useEffect(() => {
        if(id) {
            axios.get(API.GET.ONECAR+id)
                .then(res => {
                    setBrand(res?.data?.brand);
                    setCategory("");
                    setColor("");
                    setDayly("");
                    setDescAr("");
                    setDescEn("");
                    setGear("");
                    setHorse("");
                    setModel("");
                    setMonthly("");
                    setTopSpeed("");
                    setName("");
                    setSeatNumber("");
                    setWeekly("");
                    setPictures([]);
                })
                .catch(err => {
                    if(err?.response?.state === 'failed') {
                        to('/error');
                    }
                })
        }
    }, [id])

    const token = localStorage.getItem('token');

    console.log(pictures);
    
    const handleCreate = async () => {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("category", category);
        for (let i = 0; i < pictures.length; i++) {
            formData.append(`pictures[${i}]`, pictures[i]);
        }
        formData.append("price_dayly", dayly);
        formData.append("price_weekly", weekly);
        formData.append("price_monthly", monthly);
        formData.append("description_AR", descAr);
        formData.append("description_EN", descEn);
        formData.append("horse", horse);
        formData.append("model", model);
        formData.append("seat_number", seatNumber);
        formData.append("gear", gear);
        formData.append("color", color);
        formData.append("top_speed", topSpeed);

        // const data = {
        //     name, 
        //     brand, 
        //     category,
        //     pictures,
        //     price: { monthly, weekly, dayly },
        //     description: { descAr, descEn },
        //     horse,
        //     model,
        //     seatNumber,
        //     topSpeed,
        //     gear,
        //     color
        // }

        axios.post(API.POST.CAR, formData,  {
            headers: {
                "Content-Type": 'multipart/form-data',
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    toast.success(res.data.message);
                    setBrand("");
                    setCategory("");
                    setColor("");
                    setDayly("");
                    setDescAr("");
                    setDescEn("");
                    setGear("");
                    setHorse("");
                    setModel("");
                    setMonthly("");
                    setTopSpeed("");
                    setName("");
                    setSeatNumber("");
                    setWeekly("");
                    setPictures([]);
                    window.history.go(0);
                }
            })
            .catch(err => {
                console.log(err);
                if(err?.response?.data?.state === 'failed') {
                    toast.error(err?.response?.data?.message);
                }
            })
    }

    return(
    <Container className='dash-setting'>
            <ToastContainer/>
            <h1>Settings</h1>
            <button className='button-detail' onClick={()=>setPage("details")}>Details</button>
            <button className='button-pics' onClick={()=>setPage("picture")}>Pictures</button>
            <div className={`${page === 'details'? 'block': 'hidden'}`}>
                <DashBoardDetails 
                    setBrand={setBrand}
                    setCategory={setCategory}
                    setColor={setColor}
                    setDayly={setDayly}
                    setDescAr={setDescAr}
                    setDescEn={setDescEn}
                    setGear={setGear}
                    setHorse={setHorse}
                    setModel={setModel}
                    setMonthly={setMonthly}
                    setTopSpeed={setTopSpeed}
                    setName={setName}
                    setSeatNumber={setSeatNumber}
                    setWeekly={setWeekly}
                />
            </div>
            <div className={`${page === 'picture'? 'block': 'hidden'}`}>
                <DashBoardCarPics 
                    setPictures={setPictures}
                    setPage={setPage}
                />
            </div>
            {page !== 'picture' && <Button variant="primary" onClick={handleCreate}>
                    {id? 'Update':'Add'} Car
            </Button>}
    </Container>
    );
}


export default DashBoardSetting