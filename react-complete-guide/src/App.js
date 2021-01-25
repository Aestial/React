import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'g541aASd', name: 'Jaime', age: 30 },
      { id: 'g541aSsa', name: 'Juan', age: 38 },
      { id: 'g541gvfg', name: 'Pedro', age: 16 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

  }

  deletePersonsHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    console.log("Button pressed!");
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} >
              <Person 
                click={() => this.deletePersonsHandler(index)}
                name={person.name} 
                age={person.age}                
                changed={(event) => this.nameChangeHandler(event, person.id)} ></Person>
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is working!!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler} >
          Toggle Persons
        </button>
        {persons}
      </div>
    ); 
  }
}

export default App;
