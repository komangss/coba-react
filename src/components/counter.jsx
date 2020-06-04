// use shortcut imrc to import react Component from react
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = (product) => {
    console.log(product);
    
    this.setState({count: this.state.count+1});
    
  };

  render() {
    return (
      <div>
        {/* only this span element is updated, because in react virtual dom and real dom compared to other */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* we cant pass handle increment. so, we use arrow function to call handleIncrement */}
        <button onClick={ () => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button> 
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
