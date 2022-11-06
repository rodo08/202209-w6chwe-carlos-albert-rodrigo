interface RobotStructure {
  name: string;
  image: string;
  creation: string;
  resistance: number;
  speed: number;
}

export interface APIRobot {
  robotArray: RobotStructure[];
}

export default RobotStructure;
