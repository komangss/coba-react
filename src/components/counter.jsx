// use shortcut imrc to import react Component from react
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    bobo: ['bobo1']
  };

  handleIncrement = () => {
    // this.state.count++; // this not gonna work // the value of count property is being incremented
    // but react is not aware of that, thats why is not updating the view.

    // to solve this problem is we call method setState on base Component on React
    // this method tell react, that we are updating the state, then it will figured out what part of state is changed. 
    // and based on it will bring the dom and sync to the real dom
    this.setState({count: this.state.count+1});
    
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
