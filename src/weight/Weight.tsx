import React from "react";

import DailyWeightForm from "./DailyWeightForm";
import Graph from "../shared/Graph";

const Weight: React.FC = () => {
  const weights = [200, 205, 203, 200, 199, 197];
  const days = [0, 1, 2, 3, 4, 5];

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Weight Progress</h1>
      <Graph
        xaxis={days}
        yaxis={weights}
        markerColor={"blue"}
        title={"Weights"}
      />
      <DailyWeightForm />
    </div>
  );
};

export default Weight;
