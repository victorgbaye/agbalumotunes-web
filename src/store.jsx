import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './features/playlist/playlistSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
