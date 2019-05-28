import React from "react";
import "./Button.css";

const ButtonIsOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
        // If is it not not a number(if is it a number) or is it a "." or "=" -> return true;
}

export const NumberAndOperatorButton = (props) => (<div
        // give it a class of button-wrapper
        className={`button-wrapper 
${ButtonIsOperator(props.children) ? null : "operator"}`}
        //Inline If-Else with Conditional Operator
        // method for conditionally rendering elements inline is to
        // use the JavaScript conditional operator condition ? true : false
        // if props.chilldren(5,6,7, = ) is(?) true -> make nothing(null) , else(:) if our ButtonIsOperator function is false -> give it the class operator
        onClick={() => props.handleClick(props.children)}
// The onclick attribute fires on a mouse click on the element.
// we must add the props.children in that case to the handleClick because we would get only objects displayed in our input field if not
>
        {props.children}</div>
        //props.children is the textContent of Button which get's the the value inside app.js assigned
)