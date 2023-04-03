import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters, getCharacter, filterCharacters } from "../api/character.queries";
import { Character } from "../types/character.types";

export const getAllCharacters = createAsyncThunk(
  "characters/fetch",
  getCharacters
);

export const getSingleCharacter = createAsyncThunk(
  "characters/fetchSingle",
  getCharacter
);

export const searchCharacters = createAsyncThunk(
  "characters/search",
  filterCharacters
)

interface CharactersState {
  characters: Character[];
  loading: boolean;
  selectedCharacter: Character | null;
}

const initialState: CharactersState = {
  characters: [],
  loading: false,
  selectedCharacter: null
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
      })
      .addCase(getSingleCharacter.pending, (state, action) => {
        state.loading = false;
        state.selectedCharacter = null;
      })
      .addCase(getSingleCharacter.fulfilled, (state, action) => {
        state.selectedCharacter = action.payload
      })
  },
});

export default personajesSlice.reducer;
