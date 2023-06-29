import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveStreamersToState } from '../redux/streamersSlice';

export const useStreamers = () => {
    const [streamers, setStreamers] = useState([{}]);
    const dispatch = useDispatch();

    async function fetchStreamers(){
        try {
            const response = await axios.get(
                'http://localhost:4700/streamers'
            );
            if(response && response.data){
                setStreamers(response.data)
                dispatch(saveStreamersToState(response.data))
            }
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        fetchStreamers();
    }, []);
    return fetchStreamers
}