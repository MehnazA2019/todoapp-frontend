import React from 'react';
//five tasks to be added here

class TaskCount extends React.Component {
    render() {
      return (
 
        <div class="todo-body">
        <div class="col-12 col-md-8">
          <div class="tasks">
            <div class="task">
              <input 
                type="checkbox"
                id="task-1"
              />
              <label for="task-1">
                <span class="custom-checkbox"></span>
                Task 1
              </label>
                          <div class="col-6 col-md-2">
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
            
            
            

  
            <div class="task">
                <input 
                  type="checkbox"
                  id="task-2"
                />
                <label for="task-2">
                  <span class="custom-checkbox"></span>
                  Task 2
                </label>
                          <div class="col-6 col-md-2">
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
              </div>
            
            
  
              <div class="task">
                  <input 
                    type="checkbox"
                    id="task-3"
                  />
                  <label for="task-3">
                    <span class="custom-checkbox"></span>
                    Task 3
                  </label>
                            <div class="col-6 col-md-2">
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
                </div>
            

  <div class="task">
                  <input 
                    type="checkbox"
                    id="task-4"
                  />
                  <label for="task-4">
                    <span class="custom-checkbox"></span>
                    Task 4
                  </label>
                <div class="col-6 col-md-2">
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
                </div>
            
            

    <div class="task">
                  <input 
                    type="checkbox"
                    id="task-5"
                  />
                  <label for="task-5">
                    <span class="custom-checkbox"></span>
                    Task 5
                  </label>
                  <div class="col-6 col-md-2">
                  <button type="button" class="btn btn-danger">Delete</button>
              </div>
                </div>
           
          </div>
  
  
        </div>
      </div>
      );
    }
  }
  
export default TaskCount;