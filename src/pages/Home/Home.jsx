import StreamersList from "../../components/StreamersList/StreamersList";
import SubmissionForm from "../../components/SubmissionForm/SubmissionForm";
export default function Home(){
    return(
        <div className='App-style'>
            <SubmissionForm></SubmissionForm>
            <StreamersList></StreamersList>
        </div>
    )
}