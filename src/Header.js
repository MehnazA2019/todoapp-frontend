import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className= 'HeaderStyling'> 
            <div className="row none md-block" >
                <div className="col-12 header">
                    <h1 className="title">My To Do List</h1>
                    <h6 className="sub-title">Organisation is the key to success</h6>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Header;

  //Mistakes made: 
  //<h6 className="sub-title" style= "margin-top:-80px;" >Organisation is the key to success</h6>
