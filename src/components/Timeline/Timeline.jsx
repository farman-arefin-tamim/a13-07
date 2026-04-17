import React, { useContext } from "react";
import { FriendContext } from "../context/FriendProvider";

const Timeline = () => {
  const friendContext = useContext(FriendContext);
  const { storedFriend } = friendContext;

  console.log(storedFriend);
  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <h2 className="text-black text-2xl font-semibold mb-6">Timeline</h2>

      {storedFriend.map((friend, index) => (
        <div
          key={index}
          className="bg-base-100 shadow p-6 rounded-xl flex justify-between"
        >
          <div>
            <h3 className="font-semibold text-[#244d3f]">{friend.name}</h3>

            <p className="text-sm text-gray-500">{friend.next_due_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
