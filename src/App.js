import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import TaskNumberLeft from './TaskNumberLeft';
import TaskCount from './TaskCount';

class App extends React.Component {
  render() {
    return (
        <div className= "container">
          <Header/>
          <TaskNumberLeft/>
          <TaskCount/>
        </div>
      
    );
  }
}


export default App;