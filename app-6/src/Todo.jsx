import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      <div>
        <p>{this.props.task} <button onClick={() => this.props.remove(this.props.index)}>Remove</button></p>
      </div>
    )
  }
}

export default Todo