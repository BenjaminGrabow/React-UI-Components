import React, { useState } from 'react';
import './App.css';
import { NumberAndOperatorButton } from "./components/ButtonComponents/NumberAndOperatorButton";
import { Input } from "./components/DisplayComponents/Input";
import { ClearButton } from "./components/ButtonComponents/ClearButton";

const App = () => {

  const [userInput, updateUserInput] = useState("");

 const addToInput = val => {
   console.log(userInput);
   //console.log(val) = the props.children(1,2,3,4,+,- ....)
    updateUserInput(userInput + val);
    // we update the state, update the input(userInput) and we say its equal to the current input + the val
  }

  const makeInputClear = () => {
    updateUserInput("");
    //triggers when the clear button get's clicked and updates the state(userInput) to empty again
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={userInput}></Input>
        {/* We say the display is equal the userInput which got created at the top */}
        <div className="row">
          <NumberAndOperatorButton handleClick={addToInput}>7</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>8</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>9</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>/</NumberAndOperatorButton>
        </div>
        <div className="row">
          <NumberAndOperatorButton handleClick={addToInput}>4</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>5</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>6</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>*</NumberAndOperatorButton>
        </div>
        <div className="row">
          <NumberAndOperatorButton handleClick={addToInput}>1</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>2</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>3</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>+</NumberAndOperatorButton>
        </div>
        <div className="row">
          <NumberAndOperatorButton handleClick={addToInput}>.</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>0</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>=</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput}>-</NumberAndOperatorButton>
        </div>
        <div className="row">
          <ClearButton handleClear={makeInputClear}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
