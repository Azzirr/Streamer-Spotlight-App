import "./style.css";
import { useNavigate } from "react-router-dom";
import StreamerDetails from "../../components/StreamerDetails/StreamerDetails";

export default function Details(){
    const navigate = useNavigate();
    return(
        <div className="App-style-for-details">
            <header>Streamer details</header>
            <StreamerDetails></StreamerDetails>
            <button className="details-button-style" onClick={() => {navigate('/')}}>Return to homepage</button>
        </div>
    )
}