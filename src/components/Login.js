// import React from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import {useNavigate} from 'react-router-dom';
// import {FcGoogle} from 'react-icons/fc';
import shareVideo from "../assets/share.mp4";
// import logo from "../assets/logowhite.png";
import './Login.css';

export default function Login(){
    return(
        <div className='login-container'>
           <div className='video-container'>
            <video
                className="video-element"
                src={shareVideo}
                typeof='video/mp4'
                loop
                controls={false}
                muted
                autoPlay
            />
           </div> 
        </div>
    )
};