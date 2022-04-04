import React from "react";
import Plot from "react-plotly.js";

interface GraphProps {
  xaxis: number[];
  yaxis: number[] | number[][];
  yaxis2?: number[];
  markerColor: string;
  markerColor2?: string;
  title: string;
  title2?: string;
}

const Graph: React.FC<GraphProps> = (props) => {
  return (
    <>
      {props.yaxis2 ? (
        <Plot
          data={[
            {
              x: props.xaxis,
              y: props.yaxis,
              // type: "line",
              mode: "lines+markers",
              marker: { color: props.markerColor },
            },
            {
              x: props.xaxis,
              y: props.yaxis2,
              mode: "lines+markers",
              marker: { color: props.markerColor2 },
            },
          ]}
          layout={{ width: 600, height: 400, title: props.title }}
        ></Plot>
      ) : (
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
      )}
    </>
  );
};

export default Graph;
