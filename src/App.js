import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import MainContent from "./components/mainContent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
