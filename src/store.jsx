import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './features/playlist/playlistSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    auth: authReducer,

  },
});
