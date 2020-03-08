import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import AddTask from './AddTask';
import TaskNumberLeft from './TaskNumberLeft';
import TaskCount from './TaskCount';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "task 1", completed: false},
      { id: 2, description: "task 2", completed: false},
      { id: 3, description: "task 3", completed: false},
      { id: 4, description: "task 4", completed: false},
      { id: 5, description: "task 5", completed: false},
    ]
  }

  render() {
    return (
        <div className= "container">
          <Header/>
          <AddTask/>
          <TaskNumberLeft/>
          <TaskCount/>
        </div>
      
    );
  }
}


export default App;

