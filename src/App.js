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

  switchNameHandler = name => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: "Chris", age: 28 },
        { name: "Berunda", age: 333 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Jon", age: 28 },
        { name: event.target.value, age: 28 },
        { name: "Berunda", age: 333 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>Let's build some React Apps</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Jonathan!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Jon!!!")}
          changed={this.nameChangeHandler}
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
