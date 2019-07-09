import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  this.handleLogin = this.handleLogin.bind(this)
  }

  handleUserChange(v) {
    this.setState({userName:v})
  }
  
  handlePassChange(v) {
    this.setState({password:v})
  }

  handleLogin() {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div>
        <input onChange={e => this.handleUserChange(e.target.value)} type="text"/>
        <input onChange={e => this.handlePassChange(e.target.value)} type="text"/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login;

// Best time 5:20:80ms