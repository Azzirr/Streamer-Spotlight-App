import './style.css'
import { useNavigate } from "react-router-dom";

export default function PageNotFound(){
    const navigate = useNavigate();
    return(
        <div className="App-style">
            <header>Page not found</header>
            <button className='buttonStyleFor404' onClick={() => {navigate('/')}}>Return to homepage</button>
        </div>
    )
}