import React, { Component } from 'react';

import './App.css';
import bootstrap from 'bootstrap';
import Login from './Login.js';

import axios from 'axios'
import Home from './Home';
// import Background from './Images/fleet1.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fleet: true

    }

    this.handleFleet = this.handleFleet.bind(this)
  }
  handleFleet() {
    this.setState({
      fleet: false

    })
  }


  render() {
    var fleetPage = (
      <div className='App' >
        <header className="App-header">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </header>
        <div className='App-button'>
          <h1 className='App-title'>Fleet Management</h1>
          <br/>
          <figure class="figure">
            <img src={require('./fleet2.png')} class="figure-img img-fluid rounded"/>
              <figcaption class="figure-caption text-right"></figcaption>
          </figure>
          <br/>
          <br/>
            <button type='button' class="btn btn-primary" onClick={this.handleFleet}>Go</button>
          </div>
        </div>



        );
    return(
      <div>
          {this.state.fleet ? fleetPage : <Home />}
        </div>
        )
  }
  
}


export default App;
