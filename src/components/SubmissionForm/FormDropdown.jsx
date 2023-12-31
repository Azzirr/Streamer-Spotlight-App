import React from "react";
import { useState } from "react";
export default function FormDropdown(props) {
    const {onChange, options} = props;
    const [focused, setFocused] = useState(false);

    function handleFocus(event){
        setFocused(true);
    }
    
  return (
    <div className="dropdown">
        <select className="dropdown-content" onChange={onChange} onBlur={handleFocus} focused={focused.toString()} required>
        <option className="dropdown-option" value="">Select...</option>
        {options.map((option) => (
            <option className="dropdown-content" key={option.id} value={option.name}>
            {option.name}
            </option>
        ))}
        </select>
        <span className="error">Please choose an option!</span>
    </div>
  );
}