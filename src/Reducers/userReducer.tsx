import { createSlice, current } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    addUser: (state, action) => {
      console.log("action.payload===>", action.payload);
      state.name = action.payload.name;
      state.email = action.payload.email;
      console.log("State User===>", state);
    },
    removeUser: (state, action) => {
      console.log("action.payload===>", action.payload);
      state.email = "";
      state.name = "";
      console.log("State User===>", state);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
