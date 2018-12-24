import React, { Component } from "react";
import css from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js: Inside Constructor", props);
    this.state = {
      persons: [
        { id: "dfasko", name: "Jon", age: 28 },
        { id: "sldtket", name: "Chris", age: 28 },
        { id: "dkjixcz", name: "Berunda", age: 33 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("App.js: Insided componentWillMount");
  }

  componentDidMount() {
    console.log("App.js Inside componentDidMount");
  }
  // state = {
  //   persons: [
  //     { id: "dfasko", name: "Jon", age: 28 },
  //     { id: "sldtket", name: "Chris", age: 28 },
  //     { id: "dkjixcz", name: "Berunda", age: 33 }
  //   ],
  //   showPersons: false
  // };

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
    console.log("App.js Inside render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={css.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
