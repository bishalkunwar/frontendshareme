 
import { useState } from "react"
import {Routes, Route} from "react-router-dom";
import { Navbar, Feed, PinDetails, CreatePin, Search } from "../components"; 

 export default function Pins(){

    const [searchTerm, setSearchTerm] = useState('');
    

    return(
        <div>
            pins
        </div>
    )
 }