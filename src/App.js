import React, { Component } from "react";
import css from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dfasko", name: "Jon", age: 28 },
      { id: "sldtket", name: "Chris", age: 28 },
      { id: "dkjixcz", name: "Berunda", age: 33 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
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
    let persons = null;
    let btnClass = "";
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
      btnClass = css.Red;
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(css.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(css.bold);
    }
    return (
      <div className={css.App}>
        <h1>Hello, World!</h1>
        <p className={classes.join(" ")}>Let's build some React Apps</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
