export const PROJECT_INFO = "PROJECT_INFO";
export type PROJECT_INFO = typeof PROJECT_INFO;

// state interface
export interface IProjectState {
  framework: string;
  stateManagement: string;
  compiler: string;
}

// action type
export type ProjectActionType = {
  type: string;
};
