import React from "react";

import DailyWeightForm from "./DailyWeightForm";
import DailyWeightGraph from "./DailyWeightGraph";

const Weight: React.FC = () => {
  const weights = [200, 205, 203, 200, 199, 197];

  return (
    <div style={{ border: "1px solid black", display: "inline-block" }}>
      <h1>Weight Progress</h1>
      <DailyWeightGraph weights={weights} />
      <DailyWeightForm />
    </div>
  );
};

export default Weight;
