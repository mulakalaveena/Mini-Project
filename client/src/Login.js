import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            searchPage: false,
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
                {this.state.searchPage ? this.searchPage() : null}
                {this.state.loginPage ? loginPage : null}
            </div>
        )

    }

    searchPage() {
        return (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

                    <p>Registration form</p>
                </header>
                <form>
                    <label>from:</label>
                    <br />
                    <input type='text' placeholder='boarding place' value={this.state.from} onChange={this.handleFrom} />
                    <br />
                    <label>to:</label>
                    <br />
                    <input type='text' placeholder='destination' value={this.state.to} onChange={this.handleTo} />
                    <br />
                    <button type='button' onClick={this.handleSubmit}>submit</button> <br />
                    <button type='button' onClick={this.handleLogout}>logout</button>
                </form>
            </div>

        )
    }
    enablePage() {
        this.setState({
            loginPage: false,
            searchPage: true
        })
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
                //var role=res.data.role
                this.setState({
                    loginPage: !this.state.loginPage,
                    searchPage: !this.state.searchPage
                })
                alert('user is logged in')
            })
            .catch(error => {
                alert('user not found')
            })
    }


}
export default Login