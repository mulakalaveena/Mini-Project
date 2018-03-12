import React, { Component } from 'react';

import './App.css';
import bootstrap from 'bootstrap';
import Login from './Login.js';
import App from './App'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerPage:true,
      username:'',
      password:'',
      back:false
      
    }
    this.handleUsername=this.handleUsername.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
    this.handleRole=this.handleRole.bind(this)
    this.handleBack=this.handleBack.bind(this)
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
    .then((res)=>{
        this.setState({
            username:'',
            password:'',
            role:''
            
        })
        alert('registered successfully')
    })
    .catch(error=>{
        alert('name already exists')
    })
  }
  handleLogin(){
    this.setState({
      login:true,
      registerPage:false
    })
  }
  handleBack(){
    this.setState({
      registerPage:false,
      back:true,
      login:false
    })
  }

  render(){
    var registerPage=(
      <div className="Home">
        <header className="Home-header">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          <h4>Homepage</h4>
        </header>
      
        <form class="form-group">
        <div >
          <label>username:</label>
          <input type="text"  class=" form-control" value={this.state.username}onChange={this.handleUsername}  placeholder="username"/>
          <br/>
          <br/>
          <label>password:</label>
          <input type="password"class=" form-control" value={this.state.password}onChange={this.handlePassword} placeholder="password"/>
         <br/>
         <br/>
          <label>role:</label>
          <select class=" custom-select" value={this.state.role} onChange={this.handleRole}  >
            <option >select</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Driver">Driver</option>
            <option value="User">User</option>
            
          </select> 
          <br/>
          <button type = 'button' class="btn btn-info"onClick={this.handleClick}>Register</button>
          <p>registered ? login : register</p>
          <button type='button' class="btn btn-primary" onClick={this.handleLogin}>Login</button>
          <br/>
          <br/>
          <button type='button'class="btn btn-success" onClick={this.handleBack}>Back</button>
        </div>
        </form> 
        
      </div>
    ); 
    return(
      <div>
        {this.state.registerPage?registerPage:null}
        {this.state.login?<Login/>:null}
        {this.state.back?<App/>:null}
      </div>
    )
  }
  
}


export default Home;
