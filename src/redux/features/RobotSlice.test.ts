import robotList from "../../mocks/robotlist";
import { loadRobotsActionCreator, robotReducer } from "./RobotsSlice";

describe("Given a robotReducer", () => {
  describe("When it receives an initial state and a action", () => {
    test("Then it should return a new state with a list of robots", () => {
      const loadRobots = loadRobotsActionCreator(robotList);

      const currentRobotState = {
        robots: [],
      };

      const expectedRobotState = {
        robots: robotList,
      };

      const newRobotState = robotReducer(currentRobotState, loadRobots);

      expect(newRobotState).toStrictEqual(expectedRobotState);
    });
  });
});
