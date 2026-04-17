import React, { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [storedFriend, setStoredFriend] = useState([]);
  const [storedState, setStoredState] = useState([]);
  const handleFriend = (currentFriend) => {
    // const isExistFriend = storedFriend.find(
    //   (friend) => friend.id === currentFriend.id,
    // );
    setStoredFriend([...storedFriend, currentFriend]);
      toast.success(`${currentFriend.name} is successfully added`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    // if (isExistFriend) {
    //   toast.error(`${currentFriend.name} is already exist!`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   });
    // } else {
    //   setStoredFriend([...storedFriend, currentFriend]);
    //   toast.success(`${currentFriend.name} is successfully added`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   });
    // }
  };

  const data = {
    storedFriend,
    setStoredFriend,
    handleFriend,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
