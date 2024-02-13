
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {MdDownloadForOffline} from 'react-icons/md';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';

import {client, urlFor} from '../client';

export const Pin = ({pin}) => {

    const [postHovered, setPostHovered] = useState(false);
    const[savingPost, setSavingPost] = useState(false);
    const navigate = useNavigate();

    const {postedBy, image, _id, destination} = pin;
    const user = localStorage.getItem('user')!=='undefined'?JSON.parse(localStorage('user')):localStorage.clear();
    
    let alreadySaved = pin?.save?.filter((item)=>item.postedBy?._id === user?.googleId);
    
    return(
        <div>
            pin
        </div>
    )
};

export default Pin;