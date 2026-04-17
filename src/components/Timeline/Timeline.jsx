import React, { useContext, useState } from "react";
import { FriendContext } from "../context/FriendProvider";

import call from '../../assets/call.png';
import text from '../..//assets/text.png';
import video from '../../assets/video.png';

const Timeline = () => {
  const { storedFriend } = useContext(FriendContext);
  const [filterType, setFilterType] = useState(""); 

  const background = {
    Call: call,
    Text: text,
    Video: video,
  };


  const filteredFriends = filterType
    ? storedFriend.filter((friend) => friend.type === filterType)
    : storedFriend;

  return (
    <div className="max-w-6xl mx-auto space-y-4 my-4">
      <h2 className="text-black text-2xl font-semibold mb-6 mt-4">Timeline</h2>

     
      <div>
        <select
          name="Filter timeline"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

     
      {filteredFriends.length > 0 ? (
        filteredFriends.map((friend, index) => (
          <div key={index} className="bg-base-100 shadow p-6 rounded-xl flex gap-4">
            <img src={background[friend.type]} alt={friend.type} />
            <div>
              <h3 className="font-semibold text-[#244d3f]">
                {friend.type} With {friend.name}
              </h3>
              <p className="text-sm text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-black h-[60vh] text-5xl flex items-center justify-center font-bold">
          {filterType ? `No ${filterType} data available` : "There is no data available"}
        </div>
      )}
    </div>
  );
};

export default Timeline;