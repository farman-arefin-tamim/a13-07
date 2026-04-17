import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';

import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';
import { FriendContext } from '../context/FriendProvider';

const FriendDetails = () => {
    const {id} = useParams();
   
    const friends = useLoaderData();
    const expectedFriend = friends.find((friend)=>friend.id == id);
    const friendContext = useContext(FriendContext);
    const {handleFriend} = friendContext;
    console.log(friendContext);
    return (
        <div className="p-6 bg-base-200 min-h-screen">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

   
             <div className="card bg-base-100 shadow col-span-1 p-4 items-center text-center">

              <img src={expectedFriend.picture}
                className="w-16 h-16 rounded-full" />

             <h2 className="font-bold mt-2">{expectedFriend.name}</h2>

        <div className="badge badge-error text-white mt-1">{expectedFriend.status}</div>

            <div className="pt-2">
                {
                    expectedFriend.tags.map((tag,index)=>{
                    return <div key={index} className="badge rounded-xl badge-soft badge-success">{tag}</div>
                })
                }
             </div>

      <p className="text-sm text-gray-500 mt-2 italic">
          "{expectedFriend.bio}"
      </p>
      <p className="text-sm text-gray-500 mt-2 italic">
          {expectedFriend.email}
      </p>
      
        <div className="row-span-3 flex flex-col bg-base-100 shadow space-y-2">
          <button className="btn btn-ghost justify-start">Snooze 2 Weeks</button>
          <button className="btn btn-ghost justify-start">Archive</button>
          <button className="btn btn-ghost text-red-500 justify-start">Delete</button>
        </div>


    </div>

   
    <div className="col-span-3 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="card bg-base-100 p-8 text-center shadow">
          <h2 className="text-xl font-bold text-[#244d3f]">{expectedFriend.days_since_contact}</h2>
          <p className="text-sm text-gray-500">Days Since Contact</p>
        </div>

        <div className="card bg-base-100 p-8 text-center shadow">
          <h2 className="text-xl font-bold text-[#244d3f]">{expectedFriend.goal}</h2>
          <p className="text-sm text-gray-500">Goal (Days)</p>
        </div>

        <div className="card bg-base-100 p-8 text-center shadow">
          <h2 className="text-xl font-bold text-[#244d3f]">{expectedFriend.next_due_date}</h2>
          <p className="text-sm text-gray-500">Next Due</p>
        </div>

      </div>

     
      <div className="bg-base-100 shadow p-8 rounded-xl flex justify-between">
        <div>
          <h3 className="font-semibold text-[#244d3f]">Relationship Goal</h3>
          <p className="text-sm text-gray-500">
            Connect every <span className="font-bold">30 days</span>
          </p>
        </div>

        <button className="btn btn-sm">Edit</button>
      </div>

      <div>
        <div className="card bg-base-100 shadow p-8 col-span-3">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="btn flex flex-col" onClick={()=>handleFriend(expectedFriend)}><img src={call} className='h-full' alt="" /><span>Call</span></button>
            <button className="btn flex flex-col" onClick={()=>handleFriend(expectedFriend)}><img src={text} alt="" /><span>Text</span></button>
            <button className="btn flex flex-col" onClick={()=>handleFriend(expectedFriend)}><img src={video} alt="" /><span>Video</span></button>
          </div>

        </div>

      </div>

    </div>

        </div>

        </div>
    );
};

export default FriendDetails;