import React from "react";
import Plot from "react-plotly.js";

interface DailyWeightGraphProps {
  weights: number[];
}

const DailyWeightGraph: React.FC<DailyWeightGraphProps> = (props) => {
  return (
    <Plot
      data={[
        {
          x: [0, 1, 2, 3, 4, 5],
          y: props.weights,
          // type: "line",
          mode: "lines+markers",
          marker: { color: "pink" },
        },
      ]}
      layout={{ width: 600, height: 400, title: "Weights" }}
    ></Plot>
  );
};

export default DailyWeightGraph;
