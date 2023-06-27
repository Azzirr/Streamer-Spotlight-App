import { createSlice } from '@reduxjs/toolkit';

export const streamersSlice = createSlice({
  name: 'streamers',
  initialState: {
    streamersList: [],
    streamerDetails: []
  },
  reducers: {
    saveStreamersToState: (state, value) => {
      state.streamersList = value.payload;
    },
    getStreamerDetails: (state, value) => {
      state.streamerDetails = value.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveStreamersToState, getStreamerDetails } = streamersSlice.actions  

export default streamersSlice.reducer