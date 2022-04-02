import React from "react";
import Plot from "react-plotly.js";

interface GraphProps {
  xaxis: number[];
  yaxis: number[];
  markerColor: string;
  title: string;
}

const Graph: React.FC<GraphProps> = (props) => {
  return (
    <Plot
      data={[
        {
          x: props.xaxis,
          y: props.yaxis,
          // type: "line",
          mode: "lines+markers",
          marker: { color: props.markerColor },
        },
      ]}
      layout={{ width: 600, height: 400, title: props.title }}
    ></Plot>
  );
};

export default Graph;
