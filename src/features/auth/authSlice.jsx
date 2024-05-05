import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the authentication slice
const initialState = {
  user: null,  // This will hold the user details
  isLoggedIn: false,  // This will be true if the user is logged in
  token: null,  // This will store the JWT token or any other authentication token
};

// Create the authentication slice
const authSlice = createSlice({
  name: 'auth',  // Name of the slice
  initialState,  // Initial state of the slice
  reducers: {
    // Action to set the user upon login
    setUser(state, action) {
      state.user = action.payload.user;  // Set the user detail
      state.isLoggedIn = true;  // Set isLoggedIn to true
      state.token = action.payload.token;  // Assuming the token is passed with the user details
    },
    // Action to clear the state upon logout
    logout(state) {
      state.user = null;  // Clear user details
      state.isLoggedIn = false;  // Set isLoggedIn to false
      state.token = null;  // Clear the token
    },
  },
});

// Export the actions from this slice
export const { setUser, logout } = authSlice.actions;

// Default export the reducer from this slice
export default authSlice.reducer;
