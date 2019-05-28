import React, { useState } from 'react';
import './App.css';
import { NumberAndOperatorButton } from "./components/ButtonComponents/NumberAndOperatorButton";
import { Input } from "./components/DisplayComponents/Input";
import { ClearButton } from "./components/ButtonComponents/ClearButton";

const App = () => {

  const [userInput, updateUserInput] = useState("");
  //we create a state -> the first item which is userInput represents the empty string which got created with useState("")
  // the second item which is updateUserInput is only for updating the first item(userInput)
  // we need the userInput for displaying the input in our input element and to get the result and make the input clear again with our functions

  const addToInput = val => {
    console.log(userInput);
    //console.log(val) = the props.children(1,2,3,4,+,- ....)
    updateUserInput(userInput + val);
    // we update the state, update the input(userInput) and we say its equal to the current input + the val
  }

  const giveTheResult = () => {
    updateUserInput(eval(userInput))
    //The eval() function evaluates JavaScript code represented as a string -> 
    //the console displays that eval could be harmful /
    //functionality goes but sometimes browser crashed 
  }

  const makeInputClear = () => {
    updateUserInput("");
    //triggers when the clear button get's clicked and updates the state(userInput) to empty again
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={userInput} />
        {/* We say the display is equal to the userInput which got created at the top */}
        <div className="row">
        {/* USE THIS TO DONT HAVE DRY CODE !!! {[7, 8, 9, "/"].map(number => <NumberAndOperatorButton handleClick={addToInput}>{number}</NumberAndOperatorButton>)};  */}
        {[7, 8, 9, "/"].map(number => <NumberAndOperatorButton handleClick={addToInput} children={number} key={number} />)}
        </div>
        <div className="row">
        {[4, 5, 6, "*"].map(number => <NumberAndOperatorButton handleClick={addToInput} children={number} key={number} />)}
        </div>
        <div className="row">
        {[1, 2, 3, "+"].map(number => <NumberAndOperatorButton handleClick={addToInput} children={number} key={number} />)}
        </div>
        <div className="row">
        {[".", 0].map(number => <NumberAndOperatorButton handleClick={addToInput} children={number} key={number} />)}
          <NumberAndOperatorButton handleClick={giveTheResult} key={500}>=</NumberAndOperatorButton>
          <NumberAndOperatorButton handleClick={addToInput} key={30}>-</NumberAndOperatorButton>
        </div>
        <div className="row">
          <ClearButton handleClear={makeInputClear} key={20}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;


// TASK WITH CLASS Component 
// import React, { Component } from 'react';
// import './App.css';
// import Button from "./components/ButtonComponents/NumberButton";
// import { Input } from "./components/DisplayComponents/CalculatorDisplay";
// import { ClearButton } from "./components/ButtonComponents/ActionButton";

// class App extends Component  {
//   constructor(props) {
//     super(props);
//     //super refers to the parent class constructor ->
//     // (In our example, it points to the Component implementation
//     //Importantly, you can’t use this in a constructor until after you’ve called the 
//     //parent constructor. JavaScript won’t let you because of class hierarchy.
//     // JavaScript enforces that if you want to use "this" in a constructor, you have to call super first
//     //But somehow, even if you call super() without the props argument, you’ll still be able to access this.props
//     // in the render and other methods.  React also assigns props on the instance right after calling your constructor.
//     //even if you forget to pass props to super(), React would still set them right afterwards -> But this.props would still be undefined between the super call and the end of your constructor:
//     // SO ALWAYS passing down super(props), even though it isn’t strictly necessary
//     //console.log(props) = empty object

//     this.state = {
//       input: ""
//       // We’re passing an empty string as a value and,
//       // to update the state of input,
//       // we have to call setState().
//       //We have a App component that displays a input term
//       //That input term is currently empty
//       //The user submits a input term when the handleClick(on 1, 2, 3, 4...) get's called
//       //That term is captured and stored by setState as a value
//       //Reconciliation takes place and React notices the change in value
//       //React instructs the input to update the value and the search term is merged in
//     };
//   }

//   addToInput = val => {
//     //console.log(val) = the props.children(1,2,3,4,+,- ....)
//     this.setState({input: this.state.input + val});
//     // we update this.state, update the input and we say its equal to the current input + the val
//   }

//   render() {
//   return (
//     <div className="app">
// {/* div with class app to make display flex to center the box calc-wrapper which holds whole calculator */}
//       <div className="calc-wrapper">
//  {/* div calc-wrapper is whole calculator  */}
//         <Input input={this.state.input}></Input>
//         {/* Input attribute input is equal to this.state.input which got's
//        at the top in the constructor function the value of empty string */}
//         <div className="row">
//           <Button handleClick={this.addToInput}>7</Button>
//            {/* handleclick which got's created in numberButton.js get's the method addToInput
//            the props.children is equal 7 */}
//           <Button handleClick={this.addToInput}>8</Button>
//           <Button handleClick={this.addToInput}>9</Button>
//           <Button handleClick={this.addToInput}>/</Button>
//         </div>
//         <div className="row">
//           <Button handleClick={this.addToInput}>4</Button>
//           <Button handleClick={this.addToInput}>5</Button>
//           <Button handleClick={this.addToInput}>6</Button>
//           <Button handleClick={this.addToInput}>*</Button>
//         </div>
//         <div className="row">
//           <Button handleClick={this.addToInput}>1</Button>
//           <Button handleClick={this.addToInput}>2</Button>
//           <Button handleClick={this.addToInput}>3</Button>
//           <Button handleClick={this.addToInput}>+</Button>
//         </div>
//         <div className="row">
//           <Button handleClick={this.addToInput}>.</Button>
//           <Button handleClick={this.addToInput}>0</Button>
//           <Button handleClick={() => this.setState({input: eval(this.state.input)})}>=</Button>
//           {/* this.setState({input: eval(this.state.input)})
//           The eval() function evaluates JavaScript code represented as a string -> 
//           the console.log displays that eval could be harmful /
//           functionality goes but sometimes browser crashed */}
//           <Button handleClick={this.addToInput}>-</Button>
//         </div>
//         <div className="row">
//           <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
//           {/*the handleClear makes this.state which is the input ->
//            to an empty string again / children(children is whatever is
//            passed between the opening tag <h1> and the closing tag </h1>) 
//            says the textContent is Clear */}
//         </div>
//       </div>
//     </div>
//   )
//  }
// };

// export default App;

