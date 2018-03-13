import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';
import Admin from './Homepage';

class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            update:true,
            username:'',
            status:''
        }
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleName= this.handleName.bind(this)
        this.handleStatus = this.handleStatus.bind(this)

    }
    render() {
        var updatePage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>Update driver</h4>
                </header>
                <form class='App-form-group'>
                    <label>username:</label>
                    <input class='form-control'type='text' placeholder='driver name' onChange={this.handleName}/>
                    <br/>
                    <br/>
                    <label>status:</label>
                    <select  class="custom-select"value={this.state.status} onChange={this.handleStatus}  >
                    <option value='select'>status</option>
                        <option value="not assigned">not assigned</option>
                        <option value="assigned"> assigned</option>

                    </select>
                    <br/>
                    <button class='btn btn-primary'type="button" onClick={this.handleUpdate}>update</button>
                    <br />
                    <br />
                    <button class='btn btn-info' type='button' onClick={this.handleBack}>Back</button>

                </form>


            </div>
        );
        
        return (
            <div>
                {this.state.update?updatePage:null}
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
    
    handleUpdate() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/drivers/update',
            data: {
                username: this.state.username,
                status: this.state.status,
               
            },
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                username: '',
                status: ''
                
            })
            alert('details updated')
        })
        .catch(error => {
            alert('add correct details')
        })
    }
    handleBack() {
        this.setState({
            update: false,
            back: true
        })
    }

}
export default Update