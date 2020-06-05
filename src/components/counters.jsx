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

  render() {
    return (
      <div>
        {/* i want pass value to child component, so any attribute except 'key' attribute, can used on child component and take it with props keyword */}
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter#{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
