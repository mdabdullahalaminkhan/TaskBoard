import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    loader: "d-none",
  },
  reducers: {
    ShowLoader: (state) => {
      state.loader = "";
    },
    HideLoader: (state) => {
      state.loader = "d-none";
    },
  },
});

export const { ShowLoader, HideLoader } = settingSlice.actions;
export default settingSlice.reducer; 
