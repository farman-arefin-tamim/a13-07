import React, { useContext } from "react";
import { FriendContext } from "../context/FriendProvider";

import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';

const Timeline = () => {
  const friendContext = useContext(FriendContext);
  const { storedFriend, storedState } = friendContext;

  const iconMap = {
   call: call,
   text: text,
   video: video
};

  console.log(storedFriend);
  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <h2 className="text-black text-2xl font-semibold mb-6 mt-4">Timeline</h2>

      {storedFriend.length>0 ? storedFriend.map((friend, index) => (
        <div
          key={index}
          className="bg-base-100 shadow p-6 rounded-xl flex justify-between"
        >
            <img src={iconMap[storedState.type]} alt="" />
          <div>
            <h3 className="font-semibold text-[#244d3f]">{friend.name}</h3>

            <p className="text-sm text-gray-500">{friend.next_due_date}</p>
          </div>
        </div>
      )): <div className="text-black h-[60vh] text-5xl flex items-center justify-center font-bold"> There is no data available</div>}
    </div>
  );
};

export default Timeline;
