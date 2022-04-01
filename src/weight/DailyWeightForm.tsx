import React, { useState } from "react";

const DailyWeightForm: React.FC = () => {
  const [weight, setWeight] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Your weight today");
    console.log(weight);
    console.log(new Date());
  };

  return (
    <>
      <h1>Daily Weight Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="weight">Today's Weight</label>
        <input
          id="weight"
          type="text"
          placeholder="enter weight"
          name="weight"
          onChange={changeHandler}
          value={weight}
          required
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default DailyWeightForm;
