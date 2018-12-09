import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>Let's build some React Apps</p>
        <Person name="Jon" age="28" />
        <Person name="Chris" age="28">
          My Hobbies: Bass, WoodWorking
        </Person>
        <Person name="Berunda" age="33" />
      </div>
    );
  }
}

export default App;
