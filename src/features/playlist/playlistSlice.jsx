// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Asynchronous thunk for fetching playlists
// export const fetchPlaylists = createAsyncThunk('playlist/fetchPlaylists', async () => {
//   const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist');
//   const data = await response.json();
//   return data;
// });

// // Asynchronous thunk for adding a new playlist
// export const addPlaylist = createAsyncThunk('playlist/addPlaylist', async (playlistDetails) => {
//   const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(playlistDetails)
//   });
//   const data = await response.json();
//   return data;
// });

// const playlistSlice = createSlice({
//   name: 'playlist',
//   initialState: {
//     playlists: [],
//     status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlaylists.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPlaylists.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Correctly setting the playlists from the payload assuming the data is under 'playlist'
//         state.playlists = action.payload.playlist;
//       })
//       .addCase(fetchPlaylists.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addPlaylist.fulfilled, (state, action) => {
//         // Adds the new playlist to the existing array of playlists
//         state.playlists.push(action.payload);
//       });
//   }
// });

// export default playlistSlice.reducer;











// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Asynchronous thunk for fetching playlists
// export const fetchPlaylists = createAsyncThunk('playlist/fetchPlaylists', async () => {
//   const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist');
//   const data = await response.json();
//   return data;
// });

// // Asynchronous thunk for adding a new playlist
// export const addPlaylist = createAsyncThunk('playlist/addPlaylist', async (playlistDetails) => {
//   const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(playlistDetails)
//   });
//   const data = await response.json();
//   return data;
// });

// const playlistSlice = createSlice({
//   name: 'playlist',
//   initialState: {
//     playlists: [],
//     status: 'idle',
//     error: null
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPlaylists.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPlaylists.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.playlists = action.payload.playlist; // Ensure your API response structure matches
//       })
//       .addCase(fetchPlaylists.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addPlaylist.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(addPlaylist.fulfilled, (state, action) => {
//         state.playlists.push(action.payload);
//         state.status = 'succeeded';
//       })
//       .addCase(addPlaylist.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default playlistSlice.reducer;






import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous thunk for fetching playlists
export const fetchPlaylists = createAsyncThunk('playlist/fetchPlaylists', async () => {
  const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist');
  const data = await response.json();
  return data;
});

// Asynchronous thunk for adding a new playlist
export const addPlaylist = createAsyncThunk('playlist/addPlaylist', async (playlistDetails) => {
  const response = await fetch('https://agbalumotunes-server.onrender.com/api/v1/playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playlistDetails)
  });
  const data = await response.json();
  return data;
});

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlists: [],
    status: 'idle',
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.playlists = action.payload.playlist;
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPlaylist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPlaylist.fulfilled, (state, action) => {
        state.playlists.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addPlaylist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default playlistSlice.reducer;
