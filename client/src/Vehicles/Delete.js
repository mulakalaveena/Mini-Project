import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';
import Admin from './Homepage';

class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delete: true,
            model:''
           
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleModel= this.handleModel.bind(this)

    }
    render() {
        var deletePage = (

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
                    
                    <button type="button" onClick={this.handleDelete}>Delete</button>
                    <br />
                    <br />
                    <button type='button' onClick={this.handleBack}>Back</button>

                </form>


            </div>
        );
        
        return (
            <div>
                {this.state.delete ? deletePage : null}
                {this.state.back ? <Admin /> : null}

            </div>
        )
    }
    

    handleModel(event) {
        this.setState({
            model: event.target.value
        })
    }
    
    handleCreate() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/vehicles/delete',
            data: {
                model:this.state.model,
                
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    model: '',
                   
                               
                })
                alert('details deleted')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    
    handleBack() {
        this.setState({
            delete: false,
            back: true
        })
    }

}
export default Create