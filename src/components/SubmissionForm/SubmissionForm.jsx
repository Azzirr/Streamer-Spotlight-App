import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import { useState } from "react";
import { formInputs, formDropdownOptions } from "./formConst";
import { useStreamers } from "../../hooks/useStreamers";
import axios from 'axios';

export default function SubmissionForm(){
    const fetchStreamers = useStreamers();

    const [streamerData, setStreamerData] = useState({
        name: '',
        streamingPlatform: '',
        description: ''
    });
    
    function onDataChange(event){
        setStreamerData({...streamerData, [event.target.name]: event.target.value })
    }

    function onDropdownChange(event){
        setStreamerData((prevState) => ({
            ...prevState,
            streamingPlatform: event.target.value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:4700/streamers', streamerData).then(() => {
            alert('Streamer succesfully added to list!');
            fetchStreamers()
            }
        ).catch((error) => {
            alert('An error ocurred. Check server connection.', error);
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            {formInputs.map((input) => (
                <FormInput key={input.id} {...input} value={streamerData[input.name]} onChange={onDataChange}/>
            ))}
            <p>Select platform:</p>
            <FormDropdown onChange={onDropdownChange} options={formDropdownOptions} />
            <div>
                <button className="buttonStyle">Submit</button>
            </div>
        </form>
    )
}