import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdn.pixabay.com/photo/2016/02/07/14/10/cat-1184781_960_720.jpg"} />
      </div>
    );
  }
}

export default App;
