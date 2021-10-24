import React, { Component } from 'react';
import Login from './Login';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="BG">
            <Login/>
        </div>
      </div>
    );
  }
}

export default App;