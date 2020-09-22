import React, { Component } from 'react';
import './App.scss';
import PersonInfo from './components/PersonInfo/PersonInfo';

class App extends Component {
  render() {
    // return <main className="app">start here</main>;
    return <PersonInfo></PersonInfo>;
  }
}

export default App;
