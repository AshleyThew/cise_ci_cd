import React, { Component } from "react";

class App extends Component {
  increment = this.makeIncrementer(1);

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
    const { items } = this.state;
    return (
      <div>
        <p>Count: {items.count}</p>
        <button type="button" className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    );
  }
}
export default App;
