import React from "react";
import './TaskNumberLeft.css'

class TaskNumberLeft extends React.Component {
  render() {
    return (
        <div className="todo-list">
            <div className="col-12">
                <div className="todo-header">
                    <h2 className="list-title">Goals to accomplish</h2>
                    <p className="task-count-one">Goals left: 5</p>
                </div>
            </div>
        </div>
    );
  }
}

export default TaskNumberLeft;


