// import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
// import './Login.css';
import { GoogleLogin } from "@react-oauth/google";
import { client} from '../client';


export default function Login(){

    const navigate = useNavigate();
    const responseGoogle = (response) => {
        // console.log(response);
        localStorage.setItem('user', JSON.stringify(response.profileObj))
        
        const {name, googleId, imageUrl} = response.profileObj;

        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl
        }

        client.createIfNotExist(doc)
            .then(()=>{
                navigate('/', {replace: true})
            })
    }
 
    return(
        // <div className='login-container'>
        //    <div className='video-container'>
        <GoogleOAuthProvider clientId={process.env.SHAREME_GOOGLE_API}>
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
                            render={(renderProps)=>(
                                <button
                                    type='button' className='bg-mainColor flex justify-center'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className="mr-4"/> Sign In with Google
                                    
                                </button>
                            )}

                            onSuccess={responseGoogle}
                            onFailue={responseGoogle}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div> 

            </div>
        </GoogleOAuthProvider>
    )
};