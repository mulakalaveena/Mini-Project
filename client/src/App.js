import React, { Component } from 'react';

import './App.css';
import bootstrap from 'bootstrap';
import Register from './Register.js';
import Login from './Login.js';

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerPage:true,
      username:'',
      password:'',
      role:'',
      //login:false
    }
    this.handleUsername=this.handleUsername.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
    this.handleRole=this.handleRole.bind(this)
  }
  handleUsername(event) {
    this.setState({
      username: event.target.value,
     
    })
  }
  handlePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  handleRole(event){
    this.setState({
      role:event.target.value
})
  }
  
  handleClick(){
    axios({
        method:'post',
        url:'http://localhost:3001/user/register',
        data:{
            username:this.state.username,
            password:this.state.password,
            role:this.state.role
           
        },
        withCredentials: true
    })
    .then(()=>{
        this.setState({
            username:'',
            password:'',
            role:''
            
        })
        alert('user registered')
    })
    .catch(error=>{
        alert('user already exists')
    })
  }
  handleLogin(){
    this.setState({
      
      registerPage:false
    })
  }

  render(){
    var registerPage=(
      <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          
          <p>Registration form</p>
        </header>
      
        <form>
          
          <label>username:</label>
          <input type="text"  value={this.state.username}onChange={this.handleUsername}  placeholder="username"/>
          <br/>
          <br/>
          <label>password:</label>
          <input type="password" value={this.state.password}onChange={this.handlePassword} placeholder="password"/>
         <br/>
         <br/>
          <label>role</label>
          <select value={this.state.role} onChange={this.handleRole}  >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Driver">Driver</option>
            <option value="User">User</option>
            
          </select> 
          <br/>
          <button type = 'button' onClick={this.handleClick}>Register</button>
          <p>registered ? login : register</p>
          <button type='button' onClick={this.handleLogin}>Login</button>

        </form> 
        
      </div>
    ); 
    return(
      <div>
        {this.state.registerPage?registerPage:<Login/>}
      </div>
    )
  }
  
}


export default App;
