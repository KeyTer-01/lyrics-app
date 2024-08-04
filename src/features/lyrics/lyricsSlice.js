// src/features/lyrics/lyricsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lyrics: [],
  loading: false,
  error: null,
};

const lyricsSlice = createSlice({
  name: "lyrics",
  initialState,
  reducers: {
    fetchLyricsStart(state) {
      state.loading = true;
    },
    fetchLyricsSuccess(state, action) {
      state.loading = false;
      state.lyrics = action.payload;
    },
    fetchLyricsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchLyricsStart, fetchLyricsSuccess, fetchLyricsFailure } =
  lyricsSlice.actions;

export default lyricsSlice.reducer;
