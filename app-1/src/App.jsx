import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleChange(v) {
    this.setState({message:v})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;

// Best time: 2m:20s:45ms