import { IProjectState, PROJECT_INFO, ProjectActionType } from "./type";

const initialState: IProjectState = {
  framework: "React",
  stateManagement: "Redux",
  compiler: "Typescript"
};

const projectInfo = (state = initialState, action: ProjectActionType) => {
  switch (action.type) {
    case PROJECT_INFO:
      return {
        ...state,
        framework: "React",
        stateManagement: "Redux",
        compiler: "Typescript"
      };
    default:
      return state;
  }
};

export default projectInfo;
