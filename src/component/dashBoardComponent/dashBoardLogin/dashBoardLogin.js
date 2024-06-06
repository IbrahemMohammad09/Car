import './dashBoardLogin.css'
import React, { useState } from 'react';

function DashboardLogin(){

    return(
        <div className='dashboard-login' >
            <h1 className='welcome'>Welcome</h1>
            <form >
                <div>
                    <label>Email:</label>
                    <input type="email" required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default DashboardLogin