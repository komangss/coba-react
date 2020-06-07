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

  render() {
    return (
      <div>
        {/* i want pass value to child component, so any attribute except 'key' attribute, can used on child component and take it with props keyword */}
        {this.state.counters.map((counter) => (
          // instead of using the 2 attribute (value, id), we can pass counter object itself
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
