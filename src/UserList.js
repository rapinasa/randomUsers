
import React from 'react';
import PieChart from './Chart';
import UserDetails from './UserDetails';


class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: true,
            error: null,
            showChart: false,
        };
         this.handleToggleClick = this.handleToggleClick.bind(this);
    }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            users: data.results,
            loading: false,
            error: null,
            search: '',
          });
        }
      )
         .catch(err => {
    
                this.setState({
                    loading: false,
                    error: true
                });
            });
  }



      handleToggleClick() {
    this.setState(prevState => ({
      showChart: !prevState.showChart
    }));
  }


    renderLoading() {
        return (
            <div className="wrapperApp">
                <h1 className="error">Loading...</h1>
            </div>
        );
    }


    renderError() {
        return (
            <div>
                Something went wrong, Will be right back.
            </div>
        );
    }


    renderUsers() {
        const { users, loading, error } = this.state;
        
        const filteredUser = users.filter((a)=>{return a.name.first.indexOf(this.state.search) !== -1;});
        if (error) {
            this.renderError();
        }

        return (
            <div className="wrapperApp">
                {filteredUser.map(user =>
                    <UserDetails user={user} key={user.email} />
                )}
            </div>
        );
    }

    Search(event){
     this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        const users = this.state.users;
        const { loading } = this.state;
        return (
            <div className='wrapper'>

              <input type="text" placeholder='Enter first name...' value={this.state.search} onChange={this.Search.bind(this)}/>
              <button className='clickChart' onClick={this.handleToggleClick}>
                {this.state.showChart ? 'Hide Chart' : 'Show Chart'}
              </button>
               
              <PieChart users={users} chart={this.state.showChart}/>
               
              <div className="userListHeader"> 
                        <span></span>
                        <span>Last</span>
                        <span>First</span>
                        <span>Username</span>
                        <span>Phone</span>
                        <span>Location</span>
                        <span></span>
              </div>
            <div>
                
                {loading ? this.renderLoading() : this.renderUsers()}</div>
            </div>
        );
    }

}

export default Accordion;