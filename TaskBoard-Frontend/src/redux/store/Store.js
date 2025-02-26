import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "../stateSlice/Setting-slice";
import TaskSliceReducer from "../stateSlice/Task-slice";
import SummarySliceReducer from "../stateSlice/Summary-slice";
import ProfileSliceReducer from "../stateSlice/ProfileSlice";

export default configureStore({
  reducer: {
    setting: settingReducer,
    task: TaskSliceReducer,
    summary: SummarySliceReducer,
    profile:ProfileSliceReducer, 
  },
});
 