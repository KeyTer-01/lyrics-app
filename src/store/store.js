import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import lyricsReducer from "../features/lyrics/lyricsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    lyrics: lyricsReducer,
  },
});

export default store;
