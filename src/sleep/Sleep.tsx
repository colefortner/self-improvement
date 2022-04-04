import React from "react";

import DailySleepForm from "./DailySleepForm";
import Graph from "../shared/Graph";

const Sleep: React.FC = () => {
  const bedTime = [2345, 2230, 2330, 2300, 2430, 2300];
  const wakeUpTime = [800, 830, 945, 1000, 900, 845];
  const days = [0, 1, 2, 3, 4, 5];

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Sleep Data</h1>
      <Graph
        xaxis={days}
        yaxis={bedTime}
        yaxis2={wakeUpTime}
        markerColor={"blue"}
        markerColor2={"purple"}
        title={"Wake Up"}
        title2={"Sleep Time"}
      />
      <DailySleepForm />
    </div>
  );
};

export default Sleep;
