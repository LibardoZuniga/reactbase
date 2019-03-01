import React, { Component } from 'react';
import Sliderbar from './components/Sliderbar'
import Navbar from './components/Navbar'
import Content from './components/Content'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sliderbar />
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
