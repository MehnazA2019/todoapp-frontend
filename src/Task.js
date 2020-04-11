import React from 'react';

import './Task.css'

class Task extends React.Component {


  deleteClicked = () => {
    this.props.deleteTaskFunc(this.props.item.id);
  }

  doneClicked = () => {
    alert('You clicked the done button')
  }


  render() {
    return (
      <div className="body">
        <div className="todo-body">
          <div className="row taskRow">
          <div className="col-12 col-md-8">
            <div className="tasks">


              <div className="task">
                <input
                  type="checkbox"
                  id="task-1"
                />
                <label for="task-1">
                  <span className="custom-checkbox"></span>
                {this.props.item.description}
                </label>

                <div className="col-6 col-md-2" >
                  <button type="button" className="btn btn-done" onClick = {this.doneClicked}>Done</button>
                  <button type="button" className="btn btn-danger" onClick ={this.deleteClicked}>Delete</button>
                </div>
                
              </div>
 


            </div>
          </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Task;