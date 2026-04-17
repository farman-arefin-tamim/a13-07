import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
  const data = [
    { name: "Call", value: 400, fill: "purple" },
    { name: "Text", value: 300, fill: "green" },
    { name: "Video", value: 300, fill: "blue" },
  ];
  return (
    <div className="border border-amber-50 shadow-2xl py-12 my-8 bg-white-500 max-w-[60vw]  mx-auto">
      <div className="flex justify-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "40vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
        </PieChart>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </div>
    </div>
  );
};

export default Stats;
