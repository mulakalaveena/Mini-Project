import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import Admin from './Admin/Homepage'
import Manager from './Manager/Homepage'
import Status from './Driver/Status'
import User from './User.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            adminPage: false,
            driverPage:false,
            managerPage:false,
            userPage:false,
            loginPage: true
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }
    render() {
        var loginPage = (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

                    <p>Login form</p>
                </header>
                <form>
                    <label>username:</label>
                    <br />
                    <input type='text' placeholder='username' onChange={this.handleUsername} />
                    <br />
                    <label>password:</label>
                    <br />
                    <input type='password' placeholder='password' onChange={this.handlePassword} />
                    <br />
                    <button type='button' onClick={this.handleClick}>login</button>
                    <br />
                </form>
            </div>
        );
        return (
            <div>
                
                {this.state.loginPage ? loginPage : null}
                {this.state.adminPage?<Admin/>:null}
                {this.state.managerPage?<Manager/>:null}
                {this.state.driverPage?<Status/>:null}
                {this.state.userPage?<User/>:null}
                
            </div>
        )

    }
    adminPage(){
        return(
        <div>
            <Admin/>
        </div>
        )
    }
    managerPage(){
        return(
            <div>
                <Manager/>
            </div>
        )
    }
    driverPage(){
        return(
            <div>
                <Status/>
            </div>
        )
    }
    userPage(){
        return(
            <div>
                <User/>
            </div>
        )
    }
    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleClick() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/user/login',
            data: {
                username: this.state.username,
                password: this.state.password
            },
            withCredentials: true
        })
            .then((res) => {
                if(res.data.role==='Admin'){
                    this.setState({
                        adminPage: !this.state.adminPage,
                        loginPage: !this.state.loginPage
                        
                    })
                }
                if(res.data.role==='Manager'){
                    this.setState({
                        loginPage: !this.state.loginPage,
                        adminPage: this.state.adminPage,
                        managerPage:!this.state.managerPage
                    })
                }
                if(res.data.role==='Driver'){
                    this.setState({
                        loginPage: !this.state.loginPage,
                        adminPage: this.state.adminPage,
                        managerPage:this.state.managerPage,
                        driverPage:!this.state.driverPage,
                        
                    })
                }
                if(res.data.role==='User'){
                    this.setState({
                        loginPage: !this.state.loginPage,
                        adminPage: this.state.adminPage,
                        managerPage:this.state.managerPage,
                        driverPage:this.state.driverPage,
                        userPage:!this.state.userPage
                        
                    })
                }
                
                alert( res.data.role)
            })
            .catch(error => {
                alert('user not found')
            })
            
    }


}
export default Login