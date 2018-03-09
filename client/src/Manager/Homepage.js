import React, { Component } from 'react'
import bootstrap from 'bootstrap';

import Update from './Update'
//import List from '../List'
import Delete from './Delete'
import axios from 'axios'
import App from '../App'
import Assign from './Assign'



class Manager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            managerHomepage: true,
            assign:false,
            update:false,
            delete:false,
            list:false
         
        }
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleList=this.handleList.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
        this.handleAssign=this.handleAssign.bind(this)
    }
    render() {
        var managerHomepage = (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

                    <p>Admin Homepage</p>
                </header>
                <form>
                    <button type="button" onClick={this.handleUpdate} class="btn btn-secondary">Update</button>
                    <button type="button" onClick={this.handleList} class="btn btn-success">List</button>
                    <button type="button" onClick={this.handleDelete} class="btn btn-danger">Delete</button>
                    <br/>
                    <br/>
                    <button type='button' onClick={this.handleAssign} class="btn btn-info">Assign</button>
                    <br/>
                    <br/>
                    <button type="button" onClick={this.handleLogout} class='btn btn-danger'>Logout</button>
                </form>
            </div>
        );
        return(
            <div>
                {this.state.managerHomepage?managerHomepage:null}
                {this.state.update?<Update/>:null}
                {/* {this.state.list?<List/>:null}  */}
                {this.state.delete?<Delete/>:null}
                {this.state.logout?<App/>:null}
                {this.state.assign?<Assign/>:null}
            </div>
        )
    }
    
    handleUpdate(){
        this.setState({
            managerHomepage:false,
            create:false,
            update:true
        })
    }
    handleList(){
       
        this.setState({
            managerHomepage:false,
            create:false,
            update:false,
            list:true
            
        })
    }
    handleDelete(){
        this.setState({
            managerHomepage:false,
            create:false,
            update:false,
            list:false,
            delete:true
        })
    }
    handleLogout(){
        axios({
            method:'post',
            url:'http://localhost:3001/manager/logout',
            withCredentials: true
        })
        .then((res)=>{
            window.location.reload(true);
            
        })
        .catch(error=>{
            alert('error logging out')
        })
    }
    handleAssign(){
        this.setState({
            managerHomepage:false,
            create:false,
            update:false,
            list:false,
            delete:false,
            assign:true
        })
    }
   

}


export default Manager




















