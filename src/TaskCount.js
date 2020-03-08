import React from 'react';
//five tasks to be added here

import './TaskCount.css'

class TaskCount extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="todo-body">
          <div className="col-12 col-md-8">
            <div className="tasks">


              <div className="task">
                <input
                  type="checkbox"
                  id="task-1"
                />
                <label for="task-1">
                  <span className="custom-checkbox"></span>
                  Task 1
                </label>
                <div className="col-6 col-md-2">
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>


              
              <div className="task">
                <input
                  type="checkbox"
                  id="task-2"
                />
                <label for="task-2">
                  <span className="custom-checkbox"></span>
                  Task 2
                  </label>
                <div className="col-6 col-md-2">
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>



              <div className="task">
                <input
                  type="checkbox"
                  id="task-3"
                />
                <label for="task-3">
                  <span className="custom-checkbox"></span>
                  Task 3
                  </label>
                <div className="col-6 col-md-2">
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>


              <div className="task">
                <input
                  type="checkbox"
                  id="task-4"
                />
                <label for="task-4">
                  <span className="custom-checkbox"></span>
                  Task 4
                  </label>
                <div className="col-6 col-md-2">
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>



              <div className="task">
                <input
                  type="checkbox"
                  id="task-5"
                />
                <label for="task-5">
                  <span className="custom-checkbox"></span>
                  Task 5
                  </label>
                <div className="col-6 col-md-2">
                  <button type="button" className="btn btn-danger">Delete</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default TaskCount;