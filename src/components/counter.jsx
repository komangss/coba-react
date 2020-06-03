// use shortcut imrc to import react Component from react
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((
          tag // each tags -> tag
        ) => (
          <li key={tag}>{tag}</li> // in react we need a key attribute in looping
          // in real world application, key i usually an id
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a tags"}
        {this.renderTags()}
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
