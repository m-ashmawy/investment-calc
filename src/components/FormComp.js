import React, { useState } from "react";

const INITIAL_INPUTS = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

function FormComp({ onSubmit }) {
  const [userInput, setUserInput] = useState(INITIAL_INPUTS);

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      let newObj = { ...prevState };
      newObj[event.target.id] = event.target.value;
      return newObj;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(userInput);
    setUserInput(INITIAL_INPUTS);
  };

  const resetHandler = () => {
    setUserInput(INITIAL_INPUTS);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={inputChangeHandler}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default FormComp;
