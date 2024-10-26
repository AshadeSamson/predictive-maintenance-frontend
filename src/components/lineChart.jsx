import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { theme } from "../styles/theme";
import { getDomain } from "../utils/utils";

function LChart({ data, stroke, width, height, defaultKey, keys }) {
  if (!data || data.length === 0) {
    return <p>Loading data...</p>;
  }

  const domain = getDomain(data, keys[0]);

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        style={{ minWidth: "1000px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={defaultKey} type="category" />
        <YAxis domain={domain} tickFormatter={(value) => value.toFixed(2)} />
        <Tooltip />
        <Legend />
        {keys?.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line}
            stroke={stroke ? stroke : theme.colors[`color${index + 1}`]}
            activeDot={{ r: 8 }}
          />
        ))}
        {/* {props.keyOne && (
          <Line
            type="monotone"
            dataKey={props.keyOne}
            stroke={props.strokeOne}
            activeDot={{ r: 8 }}
          />
        )}
        {props.keyTwo && (
          <Line
            type="monotone"
            dataKey={props.keyTwo}
            stroke={props.strokeTwo}
          />
        )}
        {props.keyThree && (
          <Line
            type="monotone"
            dataKey={props.keyThree}
            stroke={props.strokeThree}
          />
        )}
        {props.keyFour && (
          <Line
            type="monotone"
            dataKey={props.keyFour}
            stroke={props.strokeFour}
          />
        )}
        {props.keyFive && (
          <Line
            type="monotone"
            dataKey={props.keyFive}
            stroke={props.strokeFive}
          />
        )} */}
      </LineChart>
    </div>
  );
}

export default LChart;
