import { useSelector } from "react-redux";

export default function StreamerDetails(){
    const streamerDetails = useSelector((state) => state.streamers.streamerDetails);

    return(
        <div>
            <p>Name: {streamerDetails.name}</p>
            <p>Description: {streamerDetails.description}</p>
            <p>Platform: <img src={streamerDetails.streamingPlatformImage} alt={streamerDetails.streamingPlatform} width={50} height={50}></img></p>
            <img src={streamerDetails.image} alt={streamerDetails.name} width={250} height={250}></img>
        </div>
    )
}