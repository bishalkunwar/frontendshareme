import "./Home.css"
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
    const [toggleSidebar, setToggleSidebar] = useState(false);
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

    const handleHiMenuClcik = () => {
        setToggleSidebar(!toggleSidebar); // means true now.
    };

    const handleCloseMenu = () => {
        setToggleSidebar(false);
    }

    return(
        <div className="home-container">
            <div className="sidebar-comp">
                <Sidebar user={user && user}/>
            </div>
            
            <div className="nav-container">
                <div className="nav-elements">
                    <HiMenu fontSize={40} className="cursor-pointer" onClick={handleHiMenuClcik}/>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-28"/> 
                    </Link>
                    <Link to={`user-profile/${user?._id}`}>
                        <img src={user?.image} alt="imageProfile" className="w-9 h-9 rounded-full"/>
                    </Link>
                </div>

                {toggleSidebar && (
                    <div className="toggle-container">
                        <div className="toggle-circle-bounder">
                            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={handleCloseMenu}/>
                        </div>
                        <Sidebar closeToggle={setToggleSidebar} user={user&&user}/>
                    </div>       
                )}
            </div>

            <div className="side-navs-container" ref={scrollRef}>
                <Routes>
                    <Route path="/user-profile/:userId" element={<UserProfile/>}/>
                    {/* <Route path="/*" element={<Pins user={user&&user}/>}/> */}
                </Routes>                          
            </div>
        </div>
    );
};