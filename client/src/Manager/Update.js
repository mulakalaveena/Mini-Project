import React, { Component } from 'react'
import axios from 'axios';
import bootstrap, { Collapse } from 'bootstrap';
import App from '../App';
import Manager from './Homepage';

class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            update: true,
            from: 'select',
            to: 'select',
            route1: 'select',
            route2: 'select',
            time: 0,
            driver:'select',
            vehicle:'select',
            list:true,
            vehicle:true,
            data:[],
            vdata:[]
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleFrom = this.handleFrom.bind(this)
        this.handleTo = this.handleTo.bind(this)
        this.handleRoute1 = this.handleRoute1.bind(this)
        this.handleRoute2 = this.handleRoute2.bind(this)
        this.handleTime = this.handleTime.bind(this)
        this.handleList=this.handleList.bind(this)
        this.handleVehicle=this.handleVehicle.bind(this)
        this.handleName=this.handleName.bind(this)
        this.handleModel = this.handleModel.bind(this)

    }
    render() {   
        var createPage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>Update Assignment</h4>
                </header>
                <form>
                <label>from:</label>
                    <select class='custom-select'value={this.state.from} onChange={this.handleFrom}  >
                        <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>to:</label>
                    <select class='custom-select' value={this.state.to} onChange={this.handleTo}  >
                        <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>route1:</label>
                    <select class='custom-select'value={this.state.route1} onChange={this.handleRoute1}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>route2:</label>
                    <select class='custom-select'value={this.state.route2} onChange={this.handleRoute2}  >
                    <option value='select'>select a place</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br />
                    <label>Time(hours):</label>
                    <input class='form-control'id="number" value={this.state.time}onChange={this.handleTime}type="number"min="0"/>
                    <br/>
                    
                    <br />
                    <label>driver:</label>
                    <input class='form-control'type='text' onChange={this.handleName} placeholder='drivers name'/>
                    <br/>
                    <label>vehicle:</label>
                    <input class='form-control'type='text' onChange={this.handleModel} placeholder='vehicles name'/>
                    <br/>
                    <button type="button" class='btn btn-primary'onClick={this.handleUpdate}>update</button>
                    <br />
                    <br />
                    <button type='button'class='btn btn-outline-info' onClick={this.handleBack}>Back</button>
                    <table class='table'>
                        <thead>
                            <tr  >
                                <th scope='col'>name</th>
                                <th scope='col'>status</th>
                            </tr>
                        </thead>
                        <tbody>{this.state.data.map(function(item,key){
                            return(
                                <tr  key={key}>
                                    
                                    <td >{item.username}</td>
                                    <td >{item.status}</td>
                                </tr>
                            )
                         })} </tbody>


                    </table >
                    <br/>
                    <table class='table'>
                        <thead >
                            <tr >
                                <th scope='col'>model</th>
                                <th  scope='col'>status</th>
                            </tr>
                            
                        </thead>
                        <tbody >{this.state.vdata.map(function(item,key){
                            return(
                                <tr key={key}>
                                   
                                    <td >{item.model}</td>
                                    <td >{item.status}</td>
                                </tr>
                            )
                         })} </tbody>


                    </table>

                </form>
                {this.state.list?this.handleList:null}
                {this.state.vehicle?this.handleVehicle:null}
            </div>
        
        );
        
        return (
            <div>
                {this.state.update ? createPage : null}
                {this.state.back ? <Manager /> : null}

            </div>
        )
    }
    componentWillMount(){
        this.handleList()
        this.handleVehicle()
    }
    handleList(){
        axios({
            method:'get',
            url:'http://localhost:3001/drivers/list',
            withCredentials:true
        })
        .then(res=>{
            
            this.setState({
                data:res.data,
                list:false
            })
            
        })
        .catch(error=>{
            console.log('error')
        })
    }
    handleVehicle(){
        axios({
            method:'get',
            url:'http://localhost:3001/vehicles/list',
            withCredentials:true
        })
        .then(res=>{
            
            this.setState({
                vdata:res.data,
                list:false
            })
            
        })
        .catch(error=>{
            console.log('error')
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
    handleTime(event){
        this.setState({
            time:event.target.value
        })
    }
   
    handleName(event){
        this.setState({
            driver:event.target.value
        })
    }
    handleModel(event){
        this.setState({
            vehicle:event.target.value
        })
    }
    handleUpdate() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/routes/update',
            data: {
                from: this.state.from,
                to: this.state.to,
                route1: this.state.route1,
                route2: this.state.route2,
                time:this.state.time,
                driver:this.state.driver,
                vehicle:this.state.vehicle
            },
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                from: '',
                to: '',
                route1: '',
                route2: '',
                time:'',
                driver:'select',
                vehicle:'select',
                                
            })
            this.handleList()
            //alert('details added')
        })
        .catch(error => {
            alert('add correct details')
        }),
        axios({
            method:'post',
            url:'http://localhost:3001/drivers/update',
            data:{
                username:this.state.driver,
                status:'assigned'
            },
            withCredentials:true
        })
        .then(res=>{
            this.setState({
                driver:''
            })
        })
        .catch(error=>{
            alert('could not refresh ')
        }),
        axios({
            method:'post',
            url:'http://localhost:3001/vehicles/update',
            data:{
                model:this.state.vehicle,
                status:'assigned'
            },
            withCredentials:true
        })
        .then(res=>{
            this.setState({
                vehicle:''
            })
            this.handleVehicle()
        })
        .catch(error=>{
            alert('could not refresh')
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