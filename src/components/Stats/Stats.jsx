import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
 const data = [
  { name: 'Call', value: 400, fill: 'purple' },
  { name: 'Text', value: 300, fill: 'green' },
  { name: 'Video', value: 300, fill: 'blue' },
];
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
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
  );
};

export default Stats;
