import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: "",
    length: 0,
  }

  inputChangeHandler = (event) => {
    const text = event.target.value;
    const length = text.length;
    console.log("Length: " + length);
    this.setState({
      length: length,
      text: text,
    });
  }

  deleteCharHandler = (index) => {
    const charArray = this.state.text.split('');
    charArray.splice(index, 1);
    const text = charArray.join('');
    const length = charArray.length;
    this.setState({
      length: length,
      text: text,
    });
  }

  render() {
    let charArray = this.state.text.split('');
    let charList = charArray.map((char, index) => {
      return <Char 
        click={() => this.deleteCharHandler(index)}
        value={char}
        key={index}
        ></Char>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignement 2</h1>
        </header>
        <input 
          type="text" 
          className="userInput"
          value={this.state.text}
          onChange={(e) => this.inputChangeHandler(e)}
        />
        <div>
          <p>Text contains {this.state.length} characters.</p> 
        </div>
        <Validation length={this.state.length} />
        {charList}
      </div>
    );
  }
}

export default App;
