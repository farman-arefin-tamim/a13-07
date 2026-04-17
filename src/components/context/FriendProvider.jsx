import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext();

const FriendProvider = ({children}) => {
    const [storedFriend, setStoredFriend] = useState([]);
    const handleFriend = (currentFriend) =>{
        const isExistFriend = storedFriend.find((friend)=>friend.id === currentFriend.id);
        if(isExistFriend){
            toast.error(`${currentFriend.name} is already exist!`);
        }else{
            setStoredFriend([...storedFriend, currentFriend]);
            toast.success(`${currentFriend.name} is successfully added`);
        }
    };

    const data = {
        storedFriend,
        setStoredFriend,
        handleFriend
    }
    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};



export default FriendProvider;