import '../StreamersList/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useStreamers } from '../../hooks/useStreamers';
import { getStreamerDetails } from '../../redux/streamersSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StreamersList() {
  const streamers = useSelector((state) => state.streamers.streamersList);
  const fetchStreamers = useStreamers();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function upVote(id, currentVotes, name){
    try {
      axios.put(`http://localhost:4700/streamer/${id}/vote`, {
        votes: currentVotes + 1
      }).then(
          alert(`You added +1 vote for ${name}!`)
      ).then(
          fetchStreamers()
      )
    } catch (error) {
      return error;
    }
  }

  function downVote(id, currentVotes, name){
    try {
      axios.put(`http://localhost:4700/streamer/${id}/vote`, {
        votes: currentVotes - 1
      }).then(
          alert(`You added -1 vote for ${name}!`)
      ).then(
          fetchStreamers()
      )
    } catch (error) {
      return error;
    }
  }

  async function navigateToDetails(id){
    //Easier way is just dispatch whole streamer data (if it is not sensitive data) on click to Redux and show it on user screen, but task required to use GET method.
    try {
        const response = await axios.get(
            `http://localhost:4700/streamer/${id}`
        );
        if(response && response.data){
            dispatch(getStreamerDetails(response.data));
            navigate('/details');
        } else {
          alert('Streamer not found!')
        }
    } catch (error) {
        return error;
    }
  }

  return (
    <div>
      {streamers.map((streamer, index) => (
        <div key={index} className='box' onClick={() => {navigateToDetails(streamer._id)}}>
          <p className='marginText'>{streamer.name}</p>
          <p className='votesToEnd'>{streamer.votes}</p>
          <button className='round-button' onClick={(event) => {event.stopPropagation(); upVote(streamer._id, streamer.votes, streamer.name)}}>+</button>
          <button className='round-button' onClick={(event) => {event.stopPropagation(); downVote(streamer._id, streamer.votes, streamer.name)}}>-</button>
        </div>
      ))}
    </div>
  );
}