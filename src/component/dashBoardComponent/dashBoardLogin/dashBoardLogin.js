import './dashBoardLogin.css'
import React, { useState } from 'react';
import emailicon from '../../../images/dashBoardLogin/email-icon.jpg'
import passicon from '../../../images/dashBoardLogin/pass-icon.jpg'

function DashboardLogin(){

    return(
        <div className='dashboard-login' >
            <h1 className='welcome'>Welcome</h1>
            <form >
                <div className='input-container'>
                    <label className='login-label'>Email</label><br></br>
                    <img className="email-icon" src={emailicon}/>
                    <input className='input-dash' type="email" placeholder='Email@Exampel.com' required/>
                </div>
                <div className='input-container'>
                    <label className='login-label'>Password</label><br></br>
                    <img className="email-icon" src={passicon}/>
                    <input className='input-dash' type="password" required/>
                </div>
                <div className='login-button'>
                    <button  type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}


export default DashboardLogin