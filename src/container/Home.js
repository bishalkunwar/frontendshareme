import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import {Link, Route, Routes} from 'react-router-dom';

import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import Pins from './Pins'
import {client} from '../client';
import logo from '../assets/logo.png';

export default function Home(){

    return(
        <div>
            <Sidebar/>
        </div>
    )
};