import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";
import resumeReducer from "./slices/resumeSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    resume: resumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
