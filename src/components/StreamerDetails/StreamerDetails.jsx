import './style.css'
import { useSelector } from "react-redux";

export default function StreamerDetails(){
    const streamerDetails = useSelector((state) => state.streamers.streamerDetails);

    return(
        <div>
            <p>Name: {streamerDetails.name}</p>
            <span>Description: <p className='description-font-size wrap-text'>{streamerDetails.description}</p></span>
            <p>Platform: <img src={streamerDetails.streamingPlatformImage} alt={streamerDetails.streamingPlatform} width={50} height={50}></img></p>
            <img className='image-center' src={streamerDetails.image} alt={streamerDetails.name} width={250} height={250}></img>
        </div>
    )
}