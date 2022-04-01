import React, { useState } from "react";

const DailyStepsForm: React.FC = () => {
  const [steps, setSteps] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSteps(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Your steps today");
    console.log(steps);
    console.log(new Date());
  };
  return (
    <>
      <h1>Daily Steps Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="steps">Today's Steps</label>
        <input
          id="steps"
          type="text"
          placeholder="enter steps"
          name="steps"
          onChange={changeHandler}
          value={steps}
          required
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default DailyStepsForm;
