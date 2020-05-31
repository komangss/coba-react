// use shortcut imrc to import react Component from react
import React, { Component } from "react";

// use shotcut cc to create class component
class Counter extends Component {
  render() {
    // return ( <h1>Hello World</h1> <button>Increment</button> ); // this will failed because in react we cannot return more than 1 component
    // so the solution is wrap it to one div / other element
    // return (
    //   <div>
    //     <h1>Hello World</h1> <button>Increment</button>
    //   </div>
    // );
    
    // sometimes we dont want an extra div that's not doing anything here
    // in that case, we can use React.Fragment
    return (
        <React.Fragment>
          <h1>Hello World</h1> <button>Increment</button>
        </React.Fragment>
      );
  }
}

export default Counter;
