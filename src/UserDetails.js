import React, { Component } from 'react';

class UserDetails extends Component {

  render() {
    
    return (
 
      <div className="userDetails">
      <div className="gender">
      <h2 className="userFirstName"></h2>
      <span className="userGender"></span>
      </div>
          <div className="userDetails-content">

            <div className="userColumn">
              
              <div><strong>Username </strong><span className="userName"></span></div>
              <div><strong>Registered </strong><span className="registeredDate"></span></div>
              <div><strong>Email </strong><span className="userEmail"></span></div>
            </div>

            <div className="userColumn">
              <div><strong>Address </strong><span className="userAddress"></span></div>
              <div><strong>City </strong><span className="userCity"></span></div>
              <div><strong>ZipCode </strong><span className="zipCode"></span></div>
            </div>

            <div className="userColumn">
              <div><strong>Birthday </strong><span className="userBirthday"></span></div>
              <div><strong>Phone </strong><span className="userPhone"></span></div>
              <div><strong>Cell </strong><span className="userCell"></span></div>
            </div>

             <div className="userColumn">
               <img className="userDetails-photo" />
            </div>

            <div className="userColumn">
               <button className="close" id='clickUser'>&#8722;</button>
            </div>


          </div>
      </div>
    );
  }
}

export default UserDetails;