import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RobotStructure from "../../types";

export interface RobotState {
  robots: RobotStructure[];
}

export const robotInitialState: RobotState = {
  robots: [],
};

const RobotSlice = createSlice({
  name: "robot",
  initialState: robotInitialState,
  reducers: {
    getRobots: (
      initialState,
      action: PayloadAction<RobotStructure[]>
    ): RobotState => ({
      ...initialState,
      robots: [...action.payload],
    }),
  },
});

export const robotReducer = RobotSlice.reducer;
export const { getRobots: getRobotsActionCreator } = RobotSlice.actions;
