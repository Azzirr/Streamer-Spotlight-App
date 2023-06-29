import { useState } from 'react';
export default function FormInput(props){
    const {errorMessage, ...formInputs} = props;
    const [focused, setFocused] = useState(false);

    function handleFocus(event){
        setFocused(true);
    }
    
    return(
        <div className="inputFormComponent">
            <input {...formInputs} onBlur={handleFocus} focused={focused.toString()}/>
            <span className='error'>{errorMessage}</span>
        </div>
    )
}