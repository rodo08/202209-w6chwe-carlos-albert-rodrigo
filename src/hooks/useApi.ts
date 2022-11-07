import { APIRobot } from "../types";
import { loadRobotsActionCreator } from "../redux/features/RobotsSlice";
import { useAppDispatch } from "../redux/hooks";

const useApi = () => {
  const apiURL = process.env.REACT_APP_URL;
  const dispatch = useAppDispatch();

  const getAllRobots = async () => {
    const url = `${apiURL}/robots`;
    const response = await fetch(url);
    const apiResponse: APIRobot = await response.json();
    dispatch(loadRobotsActionCreator(apiResponse.robotArray));
  };
  return { getAllRobots };
};

export default useApi;
