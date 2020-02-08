import React from 'react';

class AddTask extends React.Component {
    render() {
      return (
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Add a goal....">
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button">ADD</button>
                            </div>
                        </input>
                    </div>
                </div>
            </div>
      );
    }
  }
  
export default AddTask;
