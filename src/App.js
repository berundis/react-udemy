import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dfasko", name: "Jon", age: 28 },
      { id: "sldtket", name: "Chris", age: 28 },
      { id: "dkjixcz", name: "Berunda", age: 33 }
    ]
  };

  nameChangeHandler = (event, id) => {
    // const personIndex = this.state.persons.findIndex(p => p.id === id);
    // const person = { ...this.state.persons[personIndex] };
    // person.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[personIndex] = person;
    // this.setState({ persons });
    const persons = this.state.persons.map(p => {
      if (p.id === id) {
        let pChange = { ...p };
        pChange.name = event.target.value;
        return pChange;
      }
      return p;
    });
    this.setState({ persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>Let's build some React Apps</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
