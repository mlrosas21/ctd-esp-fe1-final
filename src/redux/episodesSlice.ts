
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEpisodes } from "../api/episodes.queries";
import { Episode } from "../types/episode.types";

export const getCharacterEpisodes = createAsyncThunk(
  "episodes/fetch",
  getEpisodes
)

interface EpisodesState {
  episodes: Episode[];
}

const initialState: EpisodesState = {
  episodes: []
};

const personajesSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  // Async calls
  extraReducers: (builder) => {
    builder
      .addCase(getCharacterEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload;
      })
  },
});

export default personajesSlice.reducer;
