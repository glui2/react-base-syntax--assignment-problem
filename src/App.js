import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Gavin State"
  };

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username="Steve"></UserOutput>
        <UserOutput username="Dave"></UserOutput>
        <UserInput
          changed={this.usernameChangeHandler}
          username={this.state.username}
        ></UserInput>
      </div>
    );
  }
}

export default App;
