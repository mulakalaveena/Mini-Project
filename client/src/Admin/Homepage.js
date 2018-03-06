import React, { Component } from 'react'
import axios from 'axios'
import Alogin from './Login'

class Ahomepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            registerPage: true,
            styles:{
                visibility:"visible"
            },
            loginPage: false,
            styles:{
                visibility:"hidden"
            }

        }
        this.handleName = this.handleName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        
    }
    render() {
        return (
            <div>
                <form>
                    <button type='button' onClick={this.handlelogin}>Update</button>
                    <button type='button' onClick={this.handlelogin}>View</button>
                    <button type='button' onClick={this.handlelogin}>delete</button>
                    <button type='button' onClick={this.handlelogin}>create</button>
                </form>
                
                
            </div>

        );  
    }
    handleLogin(){
        this.setState({
            loginPage:true,
            styles:{
                visibility:"visible"
            }
            
        })
    }
    
    handleName(event) {
        this.setState({
            name: event.target.value
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
            url: 'http://localhost:3001/admin/register',
            data: {
                name: this.state.name,
                password: this.state.password
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    loginPage: !this.state.loginPage,
                    styles:{
                        visibility:"visible"
                    },
                    registerPage: !this.state.searchPage,
                    styles:{
                        visibility:"hidden"
                    }
                })
                alert('user is registered')
            })
            .catch(error => {
                alert('user not registered')
            })
    }
    

}
export default Ahomepage