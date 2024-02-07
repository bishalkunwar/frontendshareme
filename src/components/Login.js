// import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import './Login.css';
import { GoogleLogin } from "@react-oauth/google";

export default function Login(){
    return(
        // <div className='login-container'>
        //    <div className='video-container'>
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
            <video
                // className="video-element"
                className="w-full h-full object-cover"
                src={shareVideo}
                typeof='video/mp4'
                loop
                controls={false}
                muted
                autoPlay
            />
            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                <div className="p-5">
                    <img src={logo} alt="logoImg" width="130px"/>
                </div>

                <div className="shadow-2xl">
                    <GoogleLogin 
                        clientId=""
                        render={(renderProps)=>(
                            <button
                                type='button' className='bg-mainColor flex justify-center'
                            >
                                <FcGoogle className="mr-4"/> Sign In with Google
                            </button>
                        )}
                    />
                </div>
            </div>
           </div> 

        </div>
    )
};