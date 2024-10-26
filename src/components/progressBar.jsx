import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function ProgressBar(props) {
  return (
    <div style={{ width: `${props.width}px`, height: `${props.height}px`, display: `inline-block`}}>
    <CircularProgressbar
    value={props.value}
    text={`${props.text}%`}
    minValue={props.minValue}
    maxValue={props.maxValue}
    strokeWidth={15}
    styles={buildStyles({
      textColor: props.textColor,
      pathColor: props.pathColor,
      trailColor: props.trailColor,
      textSize: '18px',
    })}
  />
   </div> 
  )
}

export default ProgressBar