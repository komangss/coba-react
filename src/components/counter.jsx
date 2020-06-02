// use shortcut imrc to import react Component from react
import React, { Component } from "react";

// use shotcut cc to create class component
class Counter extends Component {
  // Display a value dynamicly
  // then we need to add a property called it state and set it to a object
  // state is a special property to react component and basicly its is an object
  // that include any data that this component need
  
  state = {
    count: 0
  };
  
  styles = {
    fontSize: 10, // react will automaticly convert this to '10px'
    fontWeight: 'bold'
  }

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
      // in between the curly braces, we can add any valid of javascript expressions
      
      // i want add class attribute to the span
      // we cant use class='' because 'class' is avaliable in javascript // see class Counter on top
      // so, instead use class, we have className='' // remember styling in JS DOM

      // now i want costum style in this element
      // in jsx we have style='' attribute
        <div>
          <span style={this.styles} className='badge badge-primary m-2' >{this.formatCount()}</span>
          <button className='btn btn-secondary btn-sm'>Increment</button>
        </div>
      );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
