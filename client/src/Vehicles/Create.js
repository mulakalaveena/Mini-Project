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
            model:'',
            status:''
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleModel= this.handleModel.bind(this)
        this.handleStatus = this.handleStatus.bind(this)

    }
    render() {
        var createPage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Add a vehicle</p>
                </header>
                <form class='App-form-group'>
                    <label>model:</label>
                    <input type='text'class='form-control' placeholder='vehicle name' onChange={this.handleModel}/>
                    <br/>
                    <br/>
                    <label>status:</label>
                    <select  class="custom-select"value={this.state.status} onChange={this.handleStatus}  >
                    <option value='select'>status</option>
                        <option value="not assigned">not assigned</option>

                    </select>
                    <br/>
                    <button type="button"class='btn btn-primary' onClick={this.handleCreate}>Create</button>
                    <br />
                    <br />
                    <button type='button' class='btn btn-outline-info'onClick={this.handleBack}>Back</button>

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
    

    handleModel(event) {
        this.setState({
            model: event.target.value
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
            url: 'http://localhost:3001/vehicles/create',
            data: {
                model:this.state.model,
                status:this.state.status
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    model: '',
                    status: '',
                               
                })
                alert('vehicle added')
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