import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Admin from './Homepage'



class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            delete:true,
            back:false

        }
        this.handleFrom = this.handleFrom.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack=this.handleBack.bind(this)
    }
    render() {
      
        var deletepage= (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    
                    <label>from:</label>
                    <select value={this.state.from} onChange={this.handleFrom}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                    <br/>
                    <br/>
                    <button type='button' onClick={this.handleBack}>Back</button>
                </form>
            </div>
        )
        return(
            <div>
                {this.state.delete?deletepage:null}
                {this.state.back?<Admin/>:null}
            </div>
        )
    }
    handleFrom(event) {
        this.setState({
            from: event.target.value
        })
    }
    
    handleSubmit() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/places/delete',
            data: {
                from: this.state.from,
                
            },
            withCredentials: true
        })
        .then(() => {
            this.setState({
                from: '',
                
            })
            alert('details deleted')
        })
        .catch(error => {
            alert('add correct details')
        })
    }
    handleBack(){
        this.setState({
            delete:false,
            back:true
        })
    }
}
export default Delete