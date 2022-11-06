import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RobotStructure from "../../types";

export interface RobotState {
  robots: RobotStructure[];
}

export const robotInitialState: RobotState = {
  robots: [],
};

const robotSlice = createSlice({
  name: "robot",
  initialState: robotInitialState,
  reducers: {
    loadRobots: (
      currentRobotState,
      action: PayloadAction<RobotStructure[]>
    ): RobotState => ({
      ...currentRobotState,
      robots: [...action.payload],
    }),
  },
});

export const robotReducer = robotSlice.reducer;
export const { loadRobots: loadRobotsActionCreator } = robotSlice.actions;
