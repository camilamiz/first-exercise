import React, {Component} from 'react';
import './App.css';
import userInput from './User/userInput';
import userOutput from './User/userOutput';


class App extends Component {
  state = {
    username: 'Onoda Sakamichi'
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is my first exercise!</p>
        <userInput>Input</userInput>
        <userOutput>Output</userOutput>
      </div>
    )
  }
}

export default App;
