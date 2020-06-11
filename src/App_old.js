import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("Button Deleted. id : ", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App Rendered");
    
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
  
  // this needed for ajax call
  componentDidMount() {
    console.log("App Mounted");
  }
}

export default App;

// import React, { Component } from "react";
// class App extends Component {
//   state = {
//     p: "p"
//   };

//   constructor(props) {
//     // to run constructor, must call super
//     super(props);

//     console.log("App JS - Contstructor called");
//     console.log(this.props);
    
//   }

//   render() {
//     console.log("App JS - render called");
//     return <div></div>
//   }

//   // used to do ajax call
//   componentDidMount() {
//     console.log("App JS - ComponentDidMount called"); 
//   }
// }

// export default App;
