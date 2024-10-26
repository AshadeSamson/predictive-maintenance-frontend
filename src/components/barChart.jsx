import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

function BChart(props) {
  if (!props.barData) {
    return <p>Loading data...</p>;
  }
  return (
    <BarChart width={props.width} height={props.height} data={props.barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={props.defaultKey} type="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={props.dataKey} fill={props.barColor} />
    </BarChart>
  );
}

export default BChart;
