import '../StreamersList/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useStreamers } from '../../hooks/useStreamers';
import { getStreamerDetails } from '../../redux/streamersSlice';
import axios from 'axios';

export default function StreamersList() {
  const streamers = useSelector((state) => state.streamers.streamersList);
  const fetchStreamers = useStreamers();
  const dispatch = useDispatch();
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

  function navigateToDetails(streamer){
    dispatch(getStreamerDetails(streamer));
  }

  return (
    <div>
      {streamers.map((streamer, index) => (
        <div key={index} className='box' onClick={() => {navigateToDetails(streamer)}}>
          <p className='marginText'>{streamer.name}</p>
          <p className='votesToEnd'>{streamer.votes}</p>
          <button className='round-button' onClick={() => upVote(streamer._id, streamer.votes, streamer.name)}>+</button>
          <button className='round-button' onClick={() => downVote(streamer._id, streamer.votes, streamer.name)}>-</button>
        </div>
      ))}
    </div>
  );
}