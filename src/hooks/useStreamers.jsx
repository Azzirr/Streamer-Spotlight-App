import axios from 'axios';
import { useEffect, useState } from 'react';

export const useStreamers = () => {
    const [streamers, setStreamers] = useState([{}]);

    async function fetchStreamers(){
        const response = await axios.get(
            'http://localhost:4700/streamers'
        );
        if(response && response.data){
            setStreamers(response.data)
        }
    }

    useEffect(() => {
        fetchStreamers();
    }, []);
    return streamers
}