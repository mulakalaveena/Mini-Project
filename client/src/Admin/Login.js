import React, { Component } from 'react';
import axios from 'axios';

class Alogin extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:'',
            
            
        }
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChangePassword=this.handleChangePassword.bind(this)
      
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <label>Name:</label>
                    <br/>
                    <input type='text' placeholder='Adminname' value={this.state.name} onChange={this.handleChangeName}/>
                    <br/>
                    <label>password:</label>
                    <br/>
                    <input type='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
                    <br/>
                    <button type='button'onClick={this.handleClick}>Login </button>
                </form>  
            </div>  
        )
    }
    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    
    handleChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/admin/login',
            data:{
                name:this.state.name,
                password:this.state.password
               
            },
            withCredentials: true
        })
        .then(()=>{
            this.setState({
                name:'',
                password:''
                
            })
            alert('login successful')
        })
        .catch(error=>{
            alert('Adminname should be unique')
        })
       
    }
}
export default Alogin;