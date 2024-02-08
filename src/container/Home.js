import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import {Link, Route, Routes} from 'react-router-dom';

import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import Pins from './Pins';
import {userQuery} from "../utils/data";
import {client} from '../client';
import logo from '../assets/logo.png';
import { useState, useRef, useEffect } from "react";

export default function Home(){
    const [user, setUser] = useState();
    const [toggleSidebar, setToggleSidebar] = useState();
    const scrollRef = useRef(null);

    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    useEffect(() => {
        if (userInfo?.googleId) {
            const query = userQuery(userInfo.googleId);
            client.fetch(query)
                .then((data) => {
                    setUser(data[0]);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [userInfo?.googleId]);
    

    useEffect(()=>{
        //scrollRef.current.scrollTo(0,0);
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0,0);
        }
    }, []);

    return(
        <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-85 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar user={user && user}/>
            </div>
            
            <div>
                <div>
                    <HiMenu/>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <Link to="/">
                        <img src={user?.image} alt="imageProfile"/>
                    </Link>
                </div>

                {toggleSidebar && (
                    <div>
                        <div>
                            <AiFillCloseCircle fontSize={30} onClick={()=> setToggleSidebar(false)}/>
                        </div>
                        <Sidebar closeToggle={setToggleSidebar} user={user&&user}/>
                    </div>       
                )}
                </div>
                  <Routes>
                    <Route path="/user-profile/:userId" element={<UserProfile/>}/>
                    <Route path="/*" element={<Pins user={user&&user}/>}/>
                  </Routes>      
                <div>
                    
            </div>
        </div>
    );
};