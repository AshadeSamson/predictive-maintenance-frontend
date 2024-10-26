import React from 'react'
import {
    PieChart, Pie, Cell,
  } from 'recharts';


function PChart(props) {
  const pdata = props.data
  return (
    <div style={{ margin: 0, display: "inline-block" }}>
      <PieChart width={props.width} height={props.height}>
      <Pie
        data={pdata}
        cx={props.cx}
        cy={props.cy}
        innerRadius={props.innerRadius}
        outerRadius={props.outerRadius}
        fill={props.fill}
        paddingAngle={props.paddingAngle}
        dataKey={props.dataKey}
      >
        {pdata.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
        ))}
      </Pie>
    </PieChart>
  </div>
  )
}

export default PChart