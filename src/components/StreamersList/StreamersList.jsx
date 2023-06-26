import '../StreamersList/style.css';
import { useStreamers } from "../../hooks/useStreamers"

export default function StreamersList(){
    const getStreamers  = useStreamers();
    return(
        <div>
            {getStreamers.map((streamer, index) => (
                <div key={index} className='box'>
                    <p>{streamer.name}</p>
                    <p>{streamer.votes}</p>
                </div>
            ))}
        </div>
    )
}