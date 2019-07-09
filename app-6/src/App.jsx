import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo.jsx"

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

  removeListItem(index) {
    let arr = this.state.list
    arr.splice(index,1)

    this.setState({list: arr})
  }

  handleInputChange(v) {
    this.setState({input:v})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((e, i) => {
      return <Todo index={i} key={i} task={e} remove={this.removeListItem} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input 
            value={this.state.input} 
            placeholder="Enter new task..." 
            onChange={e => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        <br/>
        {list}
      </div>
    );
  }
}

export default App;
