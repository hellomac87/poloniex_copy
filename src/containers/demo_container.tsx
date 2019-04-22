import React, { Component } from "react";

// store
import { connect } from "react-redux";
import { AppState } from "../store";
import { IProjectState } from "../store/project/type";

interface IState {}

interface IProps {
  projectInfo: IProjectState;
}

class DemoContainer extends Component<IProps> {
  render() {
    const { projectInfo } = this.props;
    return (
      <div>
        <p>framework: {projectInfo.framework}</p>
        <p>stateManagement: {projectInfo.stateManagement}</p>
        <p>compiler: {projectInfo.compiler}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    projectInfo: state.projectInfo
  };
};

export default connect(mapStateToProps)(DemoContainer);
