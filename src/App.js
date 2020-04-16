import React, {Component} from 'react';
import './App.css';
import Input from './User/Input';
import Output from './User/Output';


class App extends Component {
  state = {
    username: 'Dona Valéria'
  }

  new_state = {
    newUsername: "null"
  }

  handleSubmit = (newUsername) => {
    this.setState( {
      newUserName: newUsername
    } )
  }

  handleIputChange = (event) => {
    this.setState( {
      username: event.target.value
    } )
  }

  render() {
    const {username} = this.state
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Username: {username}</p>
        <Input
          changed={this.handleIputChange}
          username={this.state.user}>
        </Input>
        <button onClick={() => this.handleSubmit(username)}>Save username
        </button>
        <Output
          newUserName={this.state.newUserName}>
        </Output>
      </div>
    )
  }
}

export default App;
