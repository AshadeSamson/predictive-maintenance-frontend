import React from 'react'
import Plot from 'react-plotly.js'

function HeatMap(props) {

    return (
        <Plot
          data={[
            {
              z: props.zData,
              x: props.xData,
              y: props.yData,
              type: 'heatmap',
              colorscale: "YlGnBu" 
            },
          ]}
          layout={{
            title: props.title,
            xaxis: { title: props.xAxis },
            yaxis: { title: props.yAxis },
          }}
        />
      );
}

export default HeatMap