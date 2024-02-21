
import {AiOutlineCloudUpload} from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import {MdDelete} from "react-icons/md";

import {categories} from "../utils/data";
import {client} from "../client";
import Spinner from "./Spinner";
import { useState } from "react";


const CreatePin = ({user}) => {

    const[title, setTitle] = useState('');
    const [about, setabout] = useState('');
    const [loading, setloading] = useState(false);
    const [destination, setdestination] = useState('');
    const [fields, setfields] = useState('');
    const [category, setcategory] = useState('');
    const [imageAsset, setimageAsset] = useState('');
    const [wrongImageType, setwrongImageType] = useState(false);

    const navigate = useNavigate();

    const uploadImage = (e) => {
        const selectedFile  = e.target.files[0];
        if(selectedFile.type === 'image/png' || selectedFile.type === "image/svg" || selectedFile.type === "jpef" || selectedFile.type === "gif" || selectedFile.type === "image/tigg"){
            setwrongImageType(false);
            setloading(true);
            client.assets.upload('image', selectedFile, {contentType: selectedFile.type, filename:selectedFile.name})
            .then((document)=>{
                setimageAsset(document); 
                setloading(false);
            }).catch((error)=>{
                    console.log('upload failed', error.message)
                });
        }else{
            setloading(false);
            setwrongImageType(true);
        }
    };

    return(
        <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
            {fields && (
                <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in">
                    Please Add all fields.
                </p>
            )}
            <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
                <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
                        {loading && (
                            <Spinner/>
                        )}{
                            wrongImageType && (
                                <p>Wrong file type, sorry.</p>
                            )
                        }
                        {!imageAsset ? (
                            <label>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <p><AiOutlineCloudUpload/></p>
                                        <p className="text-lg">Click to Upload</p>
                                    </div>
                                    <p className="mt-32 text-gray-400">
                                        Recommendation: Use High-Quality JPG, JPEG, SVG, PNG, GIF or TIFF Less than 20MB.
                                    </p>
                                </div>
                                <input type="file" name="upload-image" onChange={uploadImage} className="w-0 h-0"/>
                            </label>
                        ):(
                            <div>

                            </div>
                        );
                        
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default CreatePin;