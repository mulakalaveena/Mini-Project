import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';



class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
            driver: '',
            status:'select',
            
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleLogout=this.handleLogout.bind(this)

    }
    render() {   
        return(
            <div className="App">
            <header className="App-header">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

                <p>Admin Homepage</p>
            </header>
            <form>
            <label>name:</label>
            <input type='text' placeholder='drivers name'onChange={this.handleChange}/>
            <br />
            
            <label>status:</label>
            <select value={this.state.status} onChange={this.handleStatus}  >
            <option value='select'>select a value</option>
                <option value="reached">reached</option>
                <option value="not reached">not reached</option>
                <option value="on the way">on the way</option>
            </select>
            <br />
            <br/>
            <button type='button' onClick={this.handleClick}>Update</button>
            <br/>
            <button type='button' onClick={this.handleLogout}>logout</button>
            </form>
            </div>
            
            
        );
        
          
    }
    
    

    handleStatus(event) {
        this.setState({
            status: event.target.value
        })
    }
    handleChange(event) {
        this.setState({
            driver: event.target.value
        })
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
                driver:this.state.driver,
                
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    driver:'',
                    status:'select'
                                    
                })
                alert('details updated')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    
   

}
export default Status