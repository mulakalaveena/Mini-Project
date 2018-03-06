import React,{Component} from 'react'
import axios from 'axios'



class Logout extends Component{
    constructor(props){
        super(props)
        this.state={
           
            loggedin:true
        }
        
        this.handleClick = this.handleClick.bind(this)
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
    
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/user/logout',
            data:{
               message:'you are logging out'
            },
            withCredentials: true
        })
        .then((res)=>{
            this.setState({
                loggedin:!this.state.loggedin
            })
            alert('user logged out')
        })
        .catch(error=>{
            alert('error logging out')
        })
    }
}
export default Logout