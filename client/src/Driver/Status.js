import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';



class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // driver: '',
            status:'',
            startingtime:0,
            reachedtime:0
            
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
        this.handleStarttime=this.handleStarttime.bind(this)
        this.handleReachtime=this.handleReachtime.bind(this)

    }
    
    render() {
        const driver=this.props.driver;   

        return(
            <div className="App">
            <header className="App-header">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

                <h4>Driver Status</h4>
            </header>
            <form class='App-form-group'>
            <label>name:</label>
            <input class='form-control'type='text' value={driver} onChange={this.handleChange}/>
            <br />
            
            <label>status:</label>
            <select class='custom-select'value={this.state.status} onChange={this.handleStatus}  >
            <option value='select'>select a value</option>
                <option value="reached">reached</option>
                <option value="not reached">not reached</option>
                <option value="on the way">on the way</option>
            </select>
            <br />
            <label>startingtime:</label>
            <input type='time' onChange={this.handleStarttime}/>
            <br/>
            <label>reachedtime:</label>
            <input type='time' onChange={this.handleReachtime}/>
            <br/>
            <button class='btn btn-success'type='button' onClick={this.handleClick}>Update</button>
            <br/>
            <br/>
            <button class='btn btn-danger'type='button' onClick={this.handleLogout}>logout</button>
            </form>
            </div>
            
            
        );
        
          
    }
    handleStarttime(event){
        this.setState({
            startingtime:event.target.value
        })
    }
    handleReachtime(event){
        this.setState({
            reachedtime:event.target.value
        })
    }
    

    handleStatus(event) {
        this.setState({
            status: event.target.value
        })
    }
    handleChange(event) {
       
            this.props.driverChange(event.target.value)
        
    }
    handleLogout(){
        axios({
            method:'post',
            url:'http://localhost:3001/driver/logout',
            withCredentials: true
        })
        .then((res)=>{
            window.location.reload(true);
            
        })
        .catch(error=>{
            alert('error logging out')
        })
    }
    
    handleClick() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/assign/update',
            data: {
                
                status:this.state.status,
                driver:this.props.driver,
                startingtime:this.state.startingtime,
                reachedtime:this.state.reachedtime
                
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    driver:'',
                    status:'select',
                    stratingtime:0,
                    reachedtime:0
                                    
                })
                alert('status updated')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    
   

}
export default Status