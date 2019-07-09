import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredString: '',
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese", "bread", "pizza", "pasta", "ravioli", "oatmeal"]
    }
  }

  handleChange(v) {
    this.setState({filteredString:v})
  }
  
  render() {
    let displayFoods = this.state.foods
    .filter((e) => {
      return e.includes(this.state.filteredString)
    })
    .map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text"/>
        {displayFoods}
      </div>
    );
  }
}

export default App;
