import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Admin from './Homepage'



class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            to:'',
            route1:'',
            route2:'',
            data: [],
            list: true

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleFrom = this.handleFrom.bind(this)
        this.handleTo = this.handleTo.bind(this)
        this.handleRoute1 = this.handleRoute1.bind(this)
        this.handleRoute2 = this.handleRoute2.bind(this)

    }

    render() {
        var listpage = (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                    <h4>List of places</h4>
                </header>
                <form>
                    <table class='table'>
                        <thead >
                            <tr  >
                                <th scope="col"  >from</th>
                                <th scope="col" >to</th>
                                <th scope="col">route1</th>
                                <th scope="col">route2</th>
                                <th scope="col">time(hrs)</th>



                            </tr>
                        </thead>
                        <tbody >{this.state.data.map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td >{item.from}</td>
                                    <td >{item.to}</td>
                                    <td >{item.route1}</td>
                                    <td >{item.route2}</td>
                                    <td >{item.time}</td>
                                    <td><button value='update' class="btn btn-success" data-toggle="modal" data-target="#exampleModal1" type='button'>update</button></td>
                                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">update</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form class='App-form-group'>

                                                        <label>from:</label>
                                                        <select class="custom-select" value={this.state.from} onChange={this.handleFrom}  >
                                                            <option value='select'>select a place</option>
                                                            <option value="Hyderabad">Hyderabad</option>
                                                            <option value="Nizamabad">Nizamabad</option>
                                                            <option value="Adilabad">Adilabad</option>
                                                            <option value="Nirmal">Nirmal</option>

                                                        </select>
                                                        <br />
                                                        <label>to:</label>
                                                        <select class="custom-select" value={this.state.to} onChange={this.handleTo}  >
                                                            <option value='select'>select a place</option>
                                                            <option value="Hyderabad">Hyderabad</option>
                                                            <option value="Nizamabad">Nizamabad</option>
                                                            <option value="Adilabad">Adilabad</option>
                                                            <option value="Nirmal">Nirmal</option>

                                                        </select>
                                                        <br />
                                                        <label>route1:</label>
                                                        <select class="custom-select" value={this.state.route1} onChange={this.handleRoute1}  >
                                                            <option value='select'>select a place</option>
                                                            <option value="Hyderabad">Hyderabad</option>
                                                            <option value="Nizamabad">Nizamabad</option>
                                                            <option value="Adilabad">Adilabad</option>
                                                            <option value="Nirmal">Nirmal</option>

                                                        </select>
                                                        <br />
                                                        <label>route2:</label>
                                                        <select class="custom-select" value={this.state.route2} onChange={this.handleRoute2}  >
                                                            <option value='select'>select a place</option>
                                                            <option value="Hyderabad">Hyderabad</option>
                                                            <option value="Nizamabad">Nizamabad</option>
                                                            <option value="Adilabad">Adilabad</option>
                                                            <option value="Nirmal">Nirmal</option>

                                                        </select>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button"  data-dismiss="modal" onClick={this.handleUpdate.bind(this, key)}class="btn btn-primary">update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <td><button value='delete' class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" type='button'>delete</button></td>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>are you sure you want to delete</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" onClick={this.handleDelete.bind(this, key)} data-dismiss="modal" class="btn btn-primary">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                            )
                        }, this)} </tbody>


                    </table>
                    <button type='button' class='btn btn-outline-info' onClick={this.handleBack}>Back</button>



                </form>
            </div>
        )
        return (
            <div>
                {this.state.list ? listpage : null}
                {this.state.back ? <Admin /> : null}
            </div>
        )
    }
    componentWillMount() {
        this.handleSubmit()
    }
    handleUpdate(key){
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
            this.handleSubmit()
            alert('details updated')
        })
        .catch(error => {
            alert('add correct details')
        })
    }


    handleDelete(key) {

        axios({
            method: 'post',
            url: 'http://localhost:3001/places/delete',
            data: {
                from: this.state.data[key].from,

            },
            withCredentials: true
        })
            .then(() => {
                this.setState({
                    from: '',

                })
                this.handleSubmit()
                alert('details deleted')
                
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    handleSubmit() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/places/list',

            withCredentials: true
        })
            .then((res) => {
                this.setState({

                    data: res.data

                })
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    handleBack() {
        this.setState({
            list: false,
            back: true
        })
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
}
export default List