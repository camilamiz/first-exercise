import React, {Component} from 'react';
import './App.css';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput';


class App extends Component {
  state = {
    newUsername: 'Finn, the human'
  }

  handleIputChange = (event) => {
    this.setState( {
      newUsername: event.target.value
    } )
  }

  render() {
    const {username} = this.state
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Input
          changed={this.handleIputChange}
          username={this.state.newUsername} />
        <Output username={this.state.newUsername} />
        <Output username={this.state.newUsername} />
        <Output username='Jake ,the dog' />
      </div>
    )
  }
}

export default App;
