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

  // eslint-disable-next-line react/sort-comp
  increment = this.makeIncrementer(1);

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Count: {count}</p>
        <button type="button" className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    );
  }
}
export default App;
