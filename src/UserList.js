import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {

    const list = this.props.list;
    let filteredList = list.filter((a)=>{return a.name.first.indexOf(this.state.search) !== -1;});
    
    return (
        <div>
          
            <input type="text" placeholder='Enter first name...' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                  <div className="usersList userHeader">           
                          <span></span>
                         <span>Last</span>
                         <span>First</span>
                         <span>Username</span>
                        <span>Phone</span>
                         <span>Location</span>
                         <span></span>
                  </div>
            {filteredList.map((results, i) => (
                   
                      <div className="usersListWrapper">
                            <div className="image"><img src={results.picture.large} alt=""/></div>
                                  <div className="usersList">
                                   <span>{results.name.last}</span>
                                   <span>{results.name.first}</span>
                                   <span>{results.login.username}</span>
                                   <span>{results.phone}</span>
                                   <span>{results.location.city}</span>
                                  </div>

          <div className="button">
           <button id='clickUser' onClick={() => {
            const userDetails = document.querySelector('.userDetails');
            const userDetailsPhoto = document.querySelector('.userDetails-photo');
            const userFirstName = document.querySelector('.userFirstName');
            const userName = document.querySelector('.userName');
            const registeredDate = document.querySelector('.registeredDate');
            const userAddress = document.querySelector('.userAddress');
            const userCity = document.querySelector('.userCity');
            const zipCode = document.querySelector('.zipCode');
            const userEmail = document.querySelector('.userEmail');
            const userBirthday = document.querySelector('.userBirthday');
            const userPhone = document.querySelector('.userPhone');   
            const userCell = document.querySelector('.userCell');
            const close = document.querySelector('.close');
 
            const date = new Date(results.registered.date);
            const birthdayDate = new Date(results.dob.date);
            const day = date.getDate();
            const year = date.getFullYear();
            const month = date.getMonth();
            const birthdayDay = birthdayDate.getDate();
            const birthdayYear = birthdayDate.getFullYear();
            const birthdayMonth = birthdayDate.getMonth();
            const registrDate = month+'/'+day+'/'+year;
            const birthdayDateFull = birthdayMonth+'/'+birthdayDay+'/'+birthdayYear;
            
            function getGender(){
            const a = results.gender;
            const userGender = document.querySelector('.userGender');
            if (a=='male'){
                userGender.innerHTML = '&#9794;'
            }
            else {userGender.innerHTML = '&#9792;'}
            }
            getGender();

            userDetails.style.display = "block";

            userDetailsPhoto.src = results.picture.large;
            userFirstName.innerText = results.name.last;
            userName.innerText = results.login.username;
            registeredDate.innerText = registrDate;
            userEmail.innerText = results.email;
            userAddress.innerText = results.location.street;
            userCity.innerText = results.location.city;
            zipCode.innerText = results.location.postcode;
            userBirthday.innerText = birthdayDateFull;
            userPhone.innerText = results.phone;
            userCell.innerText = results.cell;

            close.addEventListener('click', () => userDetails.style.display = "none");
             }}>&#43;</button>
           </div>
                      
        </div>
      ))}
  </div>
);
}
}

export default UserList;