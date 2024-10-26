import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'


function Speedometer(props) {
  return (
    <ReactSpeedometer 
    width={props.width}
    height={props.height}
    maxValue={props.maxValue}
    needleColor={props.needleColor}
    segments={props.segments}
    value={props.value}
    startColor={props.startColor}
    endColor={props.endColor}/>
  )
}

export default Speedometer