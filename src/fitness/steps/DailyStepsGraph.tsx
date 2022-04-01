import React from "react";
import Plot from "react-plotly.js";

interface DailyStepsGraphProps {
  steps: number[];
}

const DailyWeightGraph: React.FC<DailyStepsGraphProps> = (props) => {
  return (
    <Plot
      data={[
        {
          x: [0, 1, 2, 3, 4, 5],
          y: props.steps,
          // type: "line",
          mode: "lines+markers",
          marker: { color: "pink" },
        },
      ]}
      layout={{ width: 600, height: 400, title: "Steps" }}
    ></Plot>
  );
};

export default DailyWeightGraph;
