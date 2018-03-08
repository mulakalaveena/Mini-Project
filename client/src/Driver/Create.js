import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';
import Admin from './Homepage';

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            create: true,
            username:'',
            status:''
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleName= this.handleName.bind(this)
        this.handleStatus = this.handleStatus.bind(this)

    }
    render() {
        var createPage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    <label>username:</label>
                    <input type='text' placeholder='driver name' onChange={this.handleName}/>
                    <br/>
                    <br/>
                    <label>status:</label>
                    <input type='text' placeholder='status' onChange={this.handleStatus}/> 
                    <br/>
                    <button type="button" onClick={this.handleCreate}>Create</button>
                    <br />
                    <br />
                    <button type='button' onClick={this.handleBack}>Back</button>

                </form>


            </div>
        );
        
        return (
            <div>
                {this.state.create ? createPage : null}
                {this.state.back ? <Admin /> : null}

            </div>
        )
    }
    

    handleName(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleStatus(event) {
        this.setState({
            status: event.target.value
        })
    }
    handleCreate() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/drivers/create',
            data: {
                username:this.state.username,
                status:this.state.status
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    username: '',
                    status: '',
                               
                })
                alert('details added')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    
    handleBack() {
        this.setState({
            create: false,
            back: true
        })
    }

}
export default Create