import React,{Component} from 'react'
import axios from 'axios'



class Logout extends Component{
    constructor(props){
        super(props)
        this.state={
           
            loggedin:true
        }
        
        this.handleLogout = this.handleLogout.bind(this)
    }
    render(){
        return(
            <div>
                    <button type='button'onClick={this.handleClick}>Logout</button>
                    <br/>
               
                    {this.state.loggedin?<Logout/>:null}
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
}
export default Logout