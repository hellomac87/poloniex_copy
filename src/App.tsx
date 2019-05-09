import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import marketList from "./containers/marketList";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={marketList} />
      </Router>
    );
  }
}

export default App;
