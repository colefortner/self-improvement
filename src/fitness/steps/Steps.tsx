import React from "react";

import DailStepsForm from "./DailyStepsForm";
import Graph from "../../shared/Graph";

const Steps: React.FC = () => {
  const steps = [7000, 6500, 8200, 9000, 4000, 6700];
  const days = [0, 1, 2, 3, 4, 5];

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Steps Progress</h1>
      <Graph xaxis={days} yaxis={steps} markerColor={"pink"} title={"Steps"} />
      <DailStepsForm />
    </div>
  );
};

export default Steps;
