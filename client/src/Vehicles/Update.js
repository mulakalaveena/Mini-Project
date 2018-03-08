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
            model:'',
            status:''
        }
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleModel= this.handleModel.bind(this)
        this.handleStatus = this.handleStatus.bind(this)

    }
    render() {
        var updatePage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    <label>model:</label>
                    <input type='text' placeholder='vehicle name' onChange={this.handleModel}/>
                    <br/>
                    <br/>
                    <label>status:</label>
                    <input type='text' placeholder='status' onChange={this.handleStatus}/> 
                    <br/>
                    <button type="button" onClick={this.handleUpdate}>update</button>
                    <br />
                    <br />
                    <button type='button' onClick={this.handleBack}>Back</button>

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
    
    handleUpdate() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/vehicles/update',
            data: {
                model: this.state.model,
                status: this.state.status,
               
            },
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                model: '',
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