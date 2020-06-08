import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 }, // each object should have id property to uniquely indetified each object
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // create a variable to handle onClick button on
  // child component
  handleDelete = (counterId) => {
    console.log("Button Deleted. id : ", counterId);
    // create a new array, thats not counterId
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // then replace the state with new counters
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    // this not gonna change in child components.
    // because we cannot access and update the child counters state
    // so, to handle thats problem we need single source of truth in our
    // child component, Single source of truth is using counters state in parent
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
