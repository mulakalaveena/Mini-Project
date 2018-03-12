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
            from: '',
            to: '',
            route1: '',
            route2: '',
            time: 0,
            model:'',
            status:''
        }

        this.handleFrom = this.handleFrom.bind(this)
        this.handleTo = this.handleTo.bind(this)
        this.handleRoute1 = this.handleRoute1.bind(this)
        this.handleRoute2 = this.handleRoute2.bind(this)
        this.handleTime = this.handleTime.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBack = this.handleBack.bind(this)
        

    }
    render() {
        var createPage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>create places</h4>
                </header>
                <form class='App-form-group'>

                    <label>from:</label>
                    <select class="custom-select"value={this.state.from} onChange={this.handleFrom}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>to:</label>
                    <select class="custom-select"value={this.state.to} onChange={this.handleTo}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>route1:</label>
                    <select  class="custom-select" value={this.state.route1} onChange={this.handleRoute1}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>route2:</label>
                    <select  class="custom-select"value={this.state.route2} onChange={this.handleRoute2}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>Time(hours):</label>
                    <input id="number" value={this.state.time}onChange={this.handleTime}type="number"min="0"/>

                    <br />
                    <br/>
                    <button type="button"class="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>
                    <br />
                    <br />
                    <button type='button' class="btn btn-outline-info"onClick={this.handleBack}>Back</button>

                </form>


            </div>
        )
        return (
            <div>
                {this.state.create ? createPage : null}
                {this.state.back ? <Admin /> : null}

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
    handleTime(event){
        this.setState({
            time:event.target.value
        })
    }
    handleSubmit() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/places/create',
            data: {
                from: this.state.from,
                to: this.state.to,
                route1: this.state.route1,
                route2: this.state.route2,
                time:this.state.time
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    from: '',
                    to: '',
                    route1: '',
                    route2: '',
                    time:''
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