import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className= "container">
        <Header/>
        <p> Hello there!!! </p>
      </div>
      
    );
  }
}


export default App;