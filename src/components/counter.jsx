// use shortcut imrc to import react Component from react
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  
  handleIncrement = () => {
    // props includes data that we give into Component
    // state includes data thats local private to that component.
    // so other component cannot access that state
    // state is local in internal to that component
    this.props.counter.value = 0;
    // error : TypeError: Cannot assign to read only property 'value' of object '
    // So react not allowed you to change any property of cross object.
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning " : "primary ";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
