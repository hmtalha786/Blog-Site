import { createSlice } from "@reduxjs/toolkit";
export const rootSlice = createSlice({
  initialState: [],
  name: "rootReducer",
  reducers: {
    // addByOne: (state) => {
    //   state.count++;
    // },
    addBlogView: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeBlogs: (state) => {
      state.length = 0;
      console.log("Emptied")
    },
  },
});
export const { addBlogView, removeBlogs } = rootSlice.actions;
export default rootSlice.reducer;
