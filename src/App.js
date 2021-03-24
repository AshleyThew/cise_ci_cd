import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  makeIncrementer = (amount) => () =>
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }));

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Count: {count}</p>
        <button
          type="button"
          className="increment"
          onClick={this.makeIncrementer(1)}
        >
          Increment count
        </button>
      </div>
    );
  }
}
export default App;
