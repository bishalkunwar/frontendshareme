
import {AiOutlineCloudUpload} from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import {MdDelete} from "react-icons/md";

import {categories} from "../utils/data";
import {client} from "../client";
import Spinner from "./Spinner";
import { useState } from "react";


const CreatePin = () => {

    const[title, setTitle] = useState('');
    const [about, setabout] = useState('');
    const [loading, setloading] = useState(false);
    const [destination, setdestination] = useState('');
    const [fields, setfields] = useState('');
    const [category, setcategory] = useState('');
    const [imageAsset, setimageAsset] = useState('');
    const [wrongImageType, setwrongImageType] = useState(false);

    return(
        <div>
            create pin.
        </div>
    )
};

export default CreatePin;