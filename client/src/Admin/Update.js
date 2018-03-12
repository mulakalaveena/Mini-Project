import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Admin from './Homepage'


class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            to: '',
            route1: '',
            route2: '',
            back:false,
            update:true
        }
        this.handleFrom = this.handleFrom.bind(this)
        this.handleTo = this.handleTo.bind(this)
        this.handleRoute1 = this.handleRoute1.bind(this)
        this.handleRoute2 = this.handleRoute2.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack=this.handleBack.bind(this)
    }
    render() {
   
        var updatepage =(
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Update the places</p>
                </header>
                <form>
                    
                    <label>from:</label>
                    <select class="custom-select"value={this.state.from} onChange={this.handleFrom}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                    <label>to:</label>
                    <select class="custom-select"value={this.state.to} onChange={this.handleTo}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                    <label>route1:</label>
                    <select class="custom-select"value={this.state.route1} onChange={this.handleRoute1}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                    <label>route2:</label>
                    <select class="custom-select"value={this.state.route2} onChange={this.handleRoute2}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                    <button type="button" class="btn btn-outline-success"onClick={this.handleSubmit}>Submit</button>
                    <br/>
                    <br/>
                    <button type='button ' class="btn btn-outline-info"onClick={this.handleBack}>Back</button>
                </form>
            </div>
        )
        return(
            <div>
                {this.state.update?updatepage:null}
                {this.state.back?<Admin/>:null}
            </div>
        )
    }
    handleFrom(event) {
        this.setState({
            from: event.target.value
        })
    }
    handleTo(event) {
        this.setState({
            to: event.target.value
        })
    }
    handleRoute1(event) {
        this.setState({
            route1: event.target.value
        })
    }
    handleRoute2(event) {
        this.setState({
            route2: event.target.value
        })
    }
    handleSubmit() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/places/update',
            data: {
                from: this.state.from,
                to: this.state.to,
                route1: this.state.route1,
                route2: this.state.route2
            },
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                from: '',
                to: '',
                route1: '',
                route2: ''
            })
            alert('details updated')
        })
        .catch(error => {
            alert('add correct details')
        })
    }
    handleBack(){
        this.setState({
            update:false,
            back:true
        })
    }
}
export default Update