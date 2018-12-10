import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jon", age: 28 },
      { name: "Chris", age: 28 },
      { name: "Berunda", age: 33 }
    ]
  };

  switchNameHandler = () => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: "Jonathan", age: 28 },
        { name: "Chris", age: 28 },
        { name: "Berunda", age: 333 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>Let's build some React Apps</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Bass, WoodWorking
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
