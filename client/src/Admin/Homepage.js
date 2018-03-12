import React, { Component } from 'react'
import bootstrap from 'bootstrap';
import Create from './Create'
import Update from './Update'
import List from './List'
import axios from 'axios'
import Home from '../Home'
import Vehicle from '../Vehicles/Homepage'
import Driver from '../Driver/Homepage'


class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminHomepage: true,
            create: false,
            update: false,
            list: false,
            role: '',
            vehicle:false,
            data:[],
            ddata:[]
            

        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleList = this.handleList.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleRole = this.handleRole.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleDriver=this.handleDriver.bind(this)
        this.handleVehicles=this.handleVehicles.bind(this)
        this.handleDrivers=this.handleDrivers.bind(this)
        this.handleLogout = this.handleLogout.bind(this)

    }
    render() {
        var border={border_collapse:'collapse',border:'1px solid black',align:'left'};
        var adminHomepage = (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>Admin Homepage</h4>
                </header>
                <div>

                </div>
                <form>
                    <button type="button" onClick={this.handleCreate} class="btn btn-primary">Create</button>
                    <button type="button" onClick={this.handleUpdate} class="btn btn-secondary">Update</button>
                    <button type="button" onClick={this.handleList} class="btn btn-success">List</button>
                    <br />
                    <br />
                    <button type='button' class="btn btn-info"onClick={this.handleClick} >vehicle</button>
                    <button type='button' class="btn btn-dark"onClick={this.handleDriver}>driver</button>
                    <button type='button' class="btn btn-danger"onClick={this.handleLogout}>logout</button>
                    <br/>
                    <table class="table table-striped" >
                        <thead >
                            <tr  >
                                <th scope="col">model</th>
                                <th scope="col">status</th>
                                
                             </tr>
                        </thead>
                        <tbody >{this.state.data.map(function(item,key){
                            return(
                                <tr  key={key}>                               
                                    <td >{item.model}</td>
                                    <td >{item.status}</td>
                                    
                                </tr>
                            )
                        })} </tbody>


                    </table>
                    <br/>
                    <table  class="table table-striped" >
                        <thead >
                            <tr  >
                                <th scope="col">username</th>
                                <th scope="col">status</th>
                                
                             </tr>
                        </thead>
                        <tbody >{this.state.ddata.map(function(item,key){
                            return(
                                <tr  key={key}>                               
                                    <td >{item.username}</td>
                                    <td >{item.status}</td>
                                    
                                </tr>
                            )
                        })} </tbody>


                    </table>
            
                </form>
            </div>
        );

        return (
            <div>
                {this.state.adminHomepage ? adminHomepage : null}
                {this.state.create ? <Create /> : null}
                {this.state.update ? <Update /> : null}
                {this.state.list?<List/>:null}
                {this.state.vehicle?<Vehicle/>:null}
                {this.state.driver?<Driver/>:null}
            </div>
        )
    }
    handleLogout(){
        axios({
            method:'post',
            url:'http://localhost:3001/user/logout',
            withCredentials: true
        })
        .then((res)=>{
            window.location.reload(true);
            
        })
        .catch(error=>{
            alert('error logging out')
        })
    }
    componentWillMount(){
        this.handleVehicles()
        this.handleDrivers()
    }
    handleVehicles(){
        axios({
            method:'get',
            url:'http://localhost:3001/vehicles/list',
            withCredentials:true
        })
        .then(res=>{
            this.setState({
                data:res.data,

            })
        })
        .catch(error=>{
            console.log('error')
        
        })
    }
    handleDrivers(){
        axios({
            method:'get',
            url:'http://localhost:3001/drivers/list',
            withCredentials:true
        })
        .then(res=>{
            this.setState({
                ddata:res.data,

            })
        })
        .catch(error=>{
            console.log('error')
        
        })
    }
    handleCreate() {
        this.setState({
            adminHomepage: false,
            create: true
        })
    }
    handleUpdate() {
        this.setState({
            adminHomepage: false,
            create: false,
            update: true
        })
    }
    handleRole(event) {
        this.setState({
            role: event.target.value
        })
    }
    handleList() {
        this.setState({
            adminHomepage: false,
            create: false,
            update: false,
            list:true
        })
        
    }
    
    
    handleClick(){
        this.setState({
            vehicle:true,
            adminHomepage:false
        })
    }
    handleDriver(){
        this.setState({
            driver:true,
            adminHomepage:false
        })
    }

    


}


export default Admin




















