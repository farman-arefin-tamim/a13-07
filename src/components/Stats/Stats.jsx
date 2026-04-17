import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendContext } from "../context/FriendProvider";

const Stats = () => {
  const { storedFriend } = useContext(FriendContext);

  const callCount = storedFriend.filter(f => f.type === "Call").length;
  const textCount = storedFriend.filter(f => f.type === "Text").length;
  const videoCount = storedFriend.filter(f => f.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "blue" },
    { name: "Text", value: textCount, fill: "purple" },
    { name: "Video", value: videoCount, fill: "green" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-4 my-4">
      <h2 className="text-black text-2xl font-semibold mb-6 mt-4">Friendship Analytics</h2>
        {
            storedFriend.length>0 ?
            <div className="border border-amber-50 shadow-2xl rounded-xl py-12 my-8 bg-white max-w-[70vw] mx-auto">
             <h4 className="font-semibold text-[#244d3f] ml-4">By Interaction Type</h4>
         <div className="flex justify-center items-center flex-col ">
             <ResponsiveContainer width="100%" height={400}>
            <PieChart>
             <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
          />
            <Tooltip />  
            <Legend />   
            </PieChart>
        </ResponsiveContainer>
        </div>
        </div>
        : <div className="text-black h-[60vh] text-5xl flex items-center justify-center font-bold"> There is no data available</div>
    }
    </div>
  );
};

export default Stats;