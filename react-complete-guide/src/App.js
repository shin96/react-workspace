import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    return (
      React.createElement("div", {className: 'App'}, 
      React.createElement("h1", null, "nested component using createElement"))
    );
  }
}

export default App;
