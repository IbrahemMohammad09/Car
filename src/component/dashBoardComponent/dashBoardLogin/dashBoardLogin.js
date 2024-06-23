import './dashBoardLogin.css'
import React, { useState } from 'react';
import emailicon from '../../../images/dashBoardLogin/email-icon.jpg'
import passicon from '../../../images/dashBoardLogin/pass-icon.jpg'
import axios from 'axios';
import API from '../../../constant/api';
import Loading from '../../SharedComponents/Loading/Loading';
import Err from '../../SharedComponents/Error/Error';
import { useNavigate } from 'react-router-dom';

function DashboardLogin(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const to = useNavigate();

    const handleLogin = async (e) => {
        setLoading(true);
        setError();

        e.preventDefault();

        const data = {
            email,
            password
        }

        axios.post(API.POST.LOGIN, data)
            .then(res => {
                setLoading(false);
                if(res?.data.state === 'success') {
                    localStorage.setItem('token', res?.data.token);
                    to('/dashboard');
                }                
            })
            .catch(err => {
                if(err?.response?.data?.state === 'failed') {
                    setError(err?.response?.data?.message)
                }
                setLoading(false);
            });
    }

    return(
        <div className='dashboard-login relative' >
            <Loading loading={loading}/>
            <h1 className='welcome'>Welcome</h1>
            <form onSubmit={handleLogin}>
                <div className='input-container'>
                    <label className='login-label'>Email</label><br></br>
                    <img className="email-icon" src={emailicon}/>
                    <input className='input-dash' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email@Exampel.com' required/>
                </div>
                <div className='input-container'>
                    <label className='login-label'>Password</label><br></br>
                    <img className="email-icon" src={passicon}/>
                    <input className='input-dash' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
                </div>
                <Err err={error}/>
                <div className='login-button'>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}


export default DashboardLogin