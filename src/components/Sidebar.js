import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import {RiHomeFill} from "react-icons/ri";
import {IoIosArrowForward} from "react-icons/io";
import logo from "../assets/logo.png";
// import {categories} from "../utils/data.js";

const categories = [
    {name: 'Nature'},
    {name: 'WallPapers'},
    {name: 'PhotoGraphy'},
    {name: 'Coding'},
    {name: 'Gaming'},
    {name: 'Others'},

]

const isNotActiveStyle = 'flex items-ceter px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';

export default function Sidebar({user, closeToggle}){

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    };

    return(
        <div className="sidebar-container">
            <div className="flex flex-col">
                <Link to="/" className="user-box" onClick={handleCloseSidebar}>
                    <img src={logo} alt="logo" className="w-full"/>
                </Link>

                <div className="flex flex-col gap-5">
                    <NavLink
                        to="/"
                        className={({isActive})=>(isActive?isActiveStyle:isNotActiveStyle)}
                    >
                        <RiHomeFill/> Home
                    </NavLink>

                    <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Categories</h3>

                    {categories.slice(0, categories.length-1).map((category)=> (
                        <NavLink 
                            to={`/category/${category.name}`} 
                            className={({isActive})=> (isActive?isActiveStyle:isNotActiveStyle)} 
                            onClick={handleCloseSidebar}
                            key={category.name}
                            >

                            <img src={category.image} alt="category-1-2-3" className="w-8 h-8 rounded-full shadow-sm"/>
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>

            {user && (
                <Link
                    to={`user-profile/{user._id}`}
                    onClick={handleCloseSidebar}
                    className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
                    >
                    <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile"/>
                    <p>{user.name}</p>
                    <IoIosArrowForward/>
                </Link>
            )}
        </div>
    )
};