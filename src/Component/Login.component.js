import React from 'react';
import './Login.styles.css'
import { loginURL } from '../logic'
import image from '../Image/Music.png'


function Login() {
    return (
        <div className='login'>
           <img src = '../Image/Music.png'/>
            {/* {Logo} */}
            {/* {Login Button} */}
            <a href={loginURL}>LOGIN WITH KSM</a>
        </div>
    )
}

export default Login;