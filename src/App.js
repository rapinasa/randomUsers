import React, { Component } from 'react';
import UserList from './UserList';
import UserDetails from './UserDetails';
import PieChart from './Chart'
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
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
            isLoaded: true,
            list: data.results
          });
        }
      )
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showChart: !prevState.showChart
    }));
  }
  
  render() {
    const list = this.state.list;
    return (
      <div id="wrapperApp">
      <h1> Random Users App </h1>
           <div id="wrapperApp1">
          <button id='clickChart' onClick={this.handleToggleClick}>
            {this.state.showChart ? 'Hide Pie Chart' : 'Show Pie Chart'}
          </button>
             </div>
        <PieChart list={list} chart={this.state.showChart}/>
        <UserList list={this.state.list} />
        <UserDetails />
      </div>
    );
  }
}

export default App;