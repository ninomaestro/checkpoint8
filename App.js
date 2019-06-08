import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    value: "",
    factor: ""
  };
  factoriel = (n) => {

    if (n == 0 || n == 1) {
      return 1;
    }
    return this.factoriel(n - 1) * n;
  }
  check = (x) => {

    this.setState({
      value: x,
      factor: this.factoriel(x)
    });

  };
  render() {
    return (
      <div>{this.state.numbers.map(e =>
        <div>
          <button onClick={() => this.check(e)} value={e}>{e}</button>
        </div>)}

        <p>the factorial of {this.state.value} is:{this.state.factor}</p>
      </div>
    );
  }
}
export default App;