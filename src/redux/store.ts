import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { robotReducer } from "./features/RobotsSlice";

export const store = configureStore({
  reducer: {
    robotActions: robotReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RobotState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
