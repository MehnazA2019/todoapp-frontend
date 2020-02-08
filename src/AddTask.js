import React from 'react';


class AddTask extends React.Component {
    render() {
      return (
          <div>
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Add a goal....">
                        </input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button">  ADD </button>
                    </div>
                    </div>
                </div>
            </div>
          </div>
      );
    }
  }
  
export default AddTask;