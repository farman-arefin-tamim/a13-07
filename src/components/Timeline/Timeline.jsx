import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendProvider';

const Timeline = () => {
    const friendContext = useContext(FriendContext);
    console.log(friendContext);
    return (
        <div>
            
        </div>
    );
};

export default Timeline;