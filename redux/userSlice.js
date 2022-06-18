// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const updateUser = createAsyncThunk("users/update", async (user) => {
//   const response = await axios.post(
//     "http://localhost:8800/api/users/1/update",
//     user
//   );
//   return response.data;
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       email: "testing@email.com",
//     },
//     // userInfo: null,
//     pending: null,
//     error: null,
//   },
//   reducers: {
//     update: (state, action) => {
//       // state.name = action.payload.name;
//       state.email = action.payload.email;
//     },
//     remove: (state) => {
//       state = null;
//     },
//   },
//   extraReducers: {
//     [updateUser.pending]: (state) => {
//       state.pending = true;
//       state.error = false;
//     },
//     [updateUser.fulfilled]: (state, action) => {
//       state.userInfo = action.payload;
//       state.pending = false;
//     },
//     [updateUser.rejected]: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

// export default userSlice.reducer;

// to use redux state
// create a new empty state to keep track of the state you want
// do a onchange function which updates the state on change
// just immport thje reducer from the userslice

// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "john",
//       email: "john@email.com",
//     },
//     pending: false,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateFailure: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      email: "john@email.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    update: (state, action) => {
      console.log(action.payload.email, "email info");
      state.userInfo = action.payload;
    },
    remove: (state) => {
      state = null;
    },
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { update, remove, updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
