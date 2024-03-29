import { createSlice } from "@reduxjs/toolkit";
import { registerAPI } from "../../Api/Auth";

const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.email !== action.payload.email
      );
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
      localStorage.removeItem("loggedInUser"); // console.log(state.allUsers);
    },
    refreshAllUsers: (state) => {
      state.allUsers = JSON.parse(localStorage.getItem("allUsers"));
    },
    refreshLoggedInUser: (state) => {
      state.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAPI.fulfilled, (state, action) => {
      state.allUsers = [...state.allUsers, action.payload];
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
    });
  },
});

export default userSlice.reducer;
export const { refreshLoggedInUser, refreshAllUsers, deleteUser } =
  userSlice.actions;
