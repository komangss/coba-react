import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
