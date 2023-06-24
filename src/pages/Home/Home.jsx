import SubmissionForm from "../../components/SubmissionForm/SubmissionForm"
import { useStreamers } from "../../hooks/useStreamers"
export default function Home(){
    const getStreamers  = useStreamers();
    return(
        <>
            {getStreamers.map((streamer, index) => (
                <p key={index}>{streamer.user}</p>
            ))}
        </>
    )
}