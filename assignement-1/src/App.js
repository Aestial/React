import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { name: 'Joaquin' },
      { name: 'Jaime' },
      { name: 'Pedro' },
    ],
  }

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value },
        { name: 'Jaimito' },
        { name: 'Pedrito' },
      ],
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <UserInput changed={this.nameChangedHandler} name={this.state.users[0].name} />
          <UserOutput name={this.state.users[0].name} />
          <UserOutput name={this.state.users[1].name} />
          <UserOutput name={this.state.users[2].name} />
        </div>
      </div>
    );
  }
}

export default App;
