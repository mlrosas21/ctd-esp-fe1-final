import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters, getCharacter } from "../api/character.queries";
import { Character } from "../types/character.types";

export const getAllCharacters = createAsyncThunk(
  "characters/fetch",
  getCharacters
);

export const getSingleCharacter = createAsyncThunk(
  "characters/fetchSingle",
  getCharacter
);

interface CharactersState {
  characters: Character[];
  loading: boolean;
}

const initialState: CharactersState = {
  characters: [],
  loading: false,
};

const personajesSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  // Async calls
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      });
  },
});

export default personajesSlice.reducer;
