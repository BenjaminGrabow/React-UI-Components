import React from 'react';
import './Button.css';

export const ClearButton = props => (
        <div className="clear-button" onClick={props.handleClear} key={props}>
                {props.children}
                {/* same funcionality like in numberButton.js */}
        </div>
);