import React, { Component } from "react";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { getMarketListTR } from "../store/marketList/action";

interface State {}

interface OwnProps {}

interface DispatchProps {
  getMarketListTR: () => void;
}

interface StateProps {}

type Props = StateProps & OwnProps & DispatchProps;

class marketList extends Component<Props, State> {
  async componentDidMount() {
    const { getMarketListTR } = this.props;
    getMarketListTR();
  }
  render() {
    return <div>marketList</div>;
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    getMarketListTR: () => dispatch(getMarketListTR())
  };
};

export default connect<StateProps, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(marketList);
