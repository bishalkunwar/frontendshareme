
import {useState, useEffect} from "react";
import {MdDownloadForOffline} from "react-icons/md";
import {Link, useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

import {client, urlFor} from "../client";
import MasonaryLayout from "./MasonaryLayout";
import {pinDetailsMorePinQuery} from "../utils/data";
import Spinner from "./Spinner";

const PinDetails = ({user}) => {

    const {pinId} = useParams();
    const[pins, setPins] = useState();
    const[pinDetail, setPinDetail] = useState();
    const[comment, setComment] = useState('')
    const[addingComment, setAddingComment] = useState(false);

    return (
        <div className="flex xl:flex-row flex-col m-auto bg-white" style={{maxWidth: '1500px', borderRadius: '32px'}}>
            <div className="flex justify-center items-center md:items-start flex-initial">
                <img src={(pinDetail?.image && urlFor(pinDetail?.image).url())} alt="user-post" className="rounded-t-3xl rounded-b-lg"/>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PinDetails;