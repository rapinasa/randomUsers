
import React from 'react';

class Section extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            className: 'userDetails-content userDetails-close',
            mainClassName: 'usersList',
            isToggleOn: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        const { open } = this.state;
        if (open) {
            this.setState({
                open: false,
                className: "userDetails-content userDetails-close",
                mainClassName: "usersList"
            });
        } 
        
        else {
          
            this.setState({
                open: true,
                className: "userDetails-content userDetails-open",
                mainClassName: "usersList"
            });
        }


        this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    }

    render() {

        const user = this.props.user;
        const { className } = this.state;
        const { mainClassName } = this.state;
            const date = new Date(user.registered.date);
            const birthdayDate = new Date(user.dob.date);
            const day = date.getDate();
            const year = date.getFullYear();
            const month = date.getMonth();
            const birthdayDay = birthdayDate.getDate();
            const birthdayYear = birthdayDate.getFullYear();
            const birthdayMonth = birthdayDate.getMonth();
            const registrDate = month+'/'+day+'/'+year;
            const birthdayDateFull = birthdayMonth+'/'+birthdayDay+'/'+birthdayYear;
            const gender = this.props.user.gender;
            function whatGender() {
                if (gender=='male'){
                return <i class="fa fa-male"></i>;

            }
            else {
                return <i class="fa fa-female"></i>;
            }
         }
         
           
        return (
            <div className="usersListWrapper">
                
                <div className={mainClassName} onClick={this.handleClick}>
                    <div><img src={user.picture.large} alt="User photo"/></div>
                    <div>{user.name.last}</div>
                    <div>{user.name.first}</div>
                    <div>{user.login.username}</div>
                    <div>{user.phone}</div>
                    <div>{user.location.city}</div>
                    <div><span className="clickUser">
                      {this.state.isToggleOn ? <i class="fa fa-plus"></i> : <i class="fa fa-minus"></i>}
                         </span>
                    </div>
                </div>
                <div className={className}>
                  
                    <div className="userInfo"> <h1>{user.name.first} </h1>
                     <span className='userGender'> {whatGender()} </span> 
                    </div>
                  <div>  
                    <div>
                         <div> <strong>Username</strong> {user.login.username} </div>
                         <div> <strong>Registered</strong> {registrDate} </div>
                         <div> <strong>Email</strong> {user.email} </div>
                    
                    </div>
                    <div>
                         <div> <strong>Address </strong> {user.location.street} </div>
                         <div> <strong>City</strong> {user.location.city} </div>
                         <div> <strong>ZIP Code</strong> {user.location.postcode} </div>
                    </div>
                    <div>
                         <div> <strong>Birthday</strong> {birthdayDateFull} </div>
                         <div> <strong>Phone</strong> {user.phone} </div>
                         <div> <strong>Cell</strong> {user.cell} </div>
                    </div>
                    <div><img src={user.picture.large} alt="User photo"/></div>
                </div>
                </div>
            </div>
        );
    }

}

export default Section;