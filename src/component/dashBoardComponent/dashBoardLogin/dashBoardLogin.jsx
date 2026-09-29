import './dashBoardLogin.css'
import React, { useState } from 'react';
import emailicon from '../../../images/dashBoardLogin/email-icon.jpg'
import passicon from '../../../images/dashBoardLogin/pass-icon.jpg'
import { demoAdminCredentials } from '../../../data/staticData';
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

        // Backend version retained: axios.post(API.POST.LOGIN, data).then(res => localStorage.setItem('token', res.data.token));
        if (data.email === demoAdminCredentials.email && data.password === demoAdminCredentials.password) {
            localStorage.setItem('token', 'static-demo-token');
            to('/dashboard');
        } else {
            setError(`Use demo credentials: ${demoAdminCredentials.email} / ${demoAdminCredentials.password}`);
        }
        setLoading(false);
    }

    return(
        <div className='dashboard-login relative'>
            <h1 className='welcome'>Welcome</h1>
            <form onSubmit={handleLogin}>
            <Loading loading={loading} style={'absolute left-[50%] translate-x-[-50%] top-[50%]'}/>
                <p className="mb-3 text-sm text-gray-600">Demo login: {demoAdminCredentials.email} / {demoAdminCredentials.password}</p>
                <div className='input-container'>
                    <label className='login-label'>Email</label><br></br>
                    <img className="email-icon" src={emailicon} alt={'email icon'}/>
                    <input className='input-dash' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email@Exampel.com' required/>
                </div>
                <div className='input-container'>
                    <label className='login-label'>Password</label><br></br>
                    <img className="email-icon" src={passicon} alt={'password icon'}/>
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
