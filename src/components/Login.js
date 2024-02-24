// import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import './Login.css';
import { GoogleLogin } from "@react-oauth/google";
import { client} from '../client';


export default function Login(){

    const navigate = useNavigate();
    const responseGoogle = (response) => {
        console.log(response);
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
        <GoogleOAuthProvider clientId={process.env.SHAREME_GOOGLE_API}>
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
                <div className="login-container">
                    <div className="image-logo">
                        <img src={logo} alt="logoImg" width="130px"/>
                    </div>

                    <div className="shadow-2xl">
                        <GoogleLogin 
                            render={(renderProps)=>(
                                <button
                                    type='button' className='google-button-whole'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className="G-logo"/> Sign In with Google
                                    
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