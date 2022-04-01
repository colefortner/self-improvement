import React from "react";

import DailStepsForm from "./DailyStepsForm";
import DailyStepsGraph from "./DailyStepsGraph";

const Steps: React.FC = () => {
  const steps = [7000, 6500, 8200, 9000, 4000, 6700];

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Steps Progress</h1>
      <DailyStepsGraph steps={steps} />
      <DailStepsForm />
    </div>
  );
};

export default Steps;
