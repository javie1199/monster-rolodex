import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super(); // help to call React.Component constructor()

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
