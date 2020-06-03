// use shortcut imrc to import react Component from react
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    // console.log(this.state.count); // in here we cant log the state count
    // because this is undefined

    // so the solution is bind method // see in constructor
    console.log(this);
    
  }

  constructor() {
    // console.log(this); // error because we must call the constructor in parent class with super()
    super();
    // console.log(this); // result is Counter object
    
    // so this perfect opurtunity to use bind method
    // earlier u learn, that function in javascript are object, so they have property and method
    // one of them method is bind() method. and with this method we can set value of this
    // this method will return a new instance of the handleIncrement function and in that function... this is always refreshing the current counter object, so no matter function  that called , this is not gonna change
    // so this function return a new function, we can get function and reset handleIncrement
    this.handleIncrement = this.handleIncrement.bind(this);

    
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning " : "primary ";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
