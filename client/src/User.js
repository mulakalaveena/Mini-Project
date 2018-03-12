import React,{Component} from 'react'
import axios from 'axios'

class User extends Component{
    constructor(props){
        super(props)
        this.state={
            from:'select',
            to:'select',
            data:[],
            user:true
        }
        this.handleFrom=this.handleFrom.bind(this)
        this.handleTo=this.handleTo.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleLogout=this.handleLogout.bind(this)

    }
    handleFrom(event) {
        this.setState({
            from :event.target.value
        })
    }
    handleTo(event) {
        this.setState({
            to: event.target.value
        })
    }
    render(){

        var userpage=(
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>User </h4>
                </header>
            
            <form class='App-form-group'>
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
            <select  class='custom-select' value={this.state.to} onChange={this.handleTo}  >
            <option value='select'>select a place</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Adilabad">Adilabad</option>
                <option value="Nirmal">Nirmal</option>

            </select>
            <br/>
            <br/>
            <button type='button'class='btn btn-primary' onClick={this.handleClick}>Search</button>
            <br/>
            <button type='button' class='btn btn-danger' onClick={this.handleLogout}>Logout</button>
            
            </form>

            </div>
        );
        var list=(
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <h4>List </h4>
                </header>
            <div>
            <table class='table' >
                        <thead >
                            <tr  >
                                <th scope='col' >from</th>
                                <th scope='col'  >to</th>
                                <th scope='col' >route1</th>
                                <th scope='col' >route2</th>
                                <th scope='col' >time</th>
                                <th scope='col' >driver</th>
                                <th scope='col' >vehicle</th>
                                
                             </tr>
                        </thead>
                        <tbody >{this.state.data.map(function(item,key){
                            return(
                                <tr  key={key}>                               
                                    <td >{item.from}</td>
                                    <td >{item.to}</td>
                                    <td >{item.route1}</td>
                                    <td >{item.route2}</td>
                                    <td >{item.time}</td>
                                    <td >{item.driver}</td>
                                    <td >{item.vehicle}</td>
                                                                                                            
                                    
                                </tr>
                            )
                        })} </tbody>


                    </table>
                    
                    <button type='button'class='btn btn-danger' onClick={this.handleLogout}>Logout</button>
                </div>
                </div>
                    
        )
        
        return(
            <div>
                
                {this.state.user?userpage:null}
                {this.state.list?list:null}
            </div>
        )
    }
    
    handleClick(){
        axios({
            method:'post',
            url:'http://localhost:3001/search/place',
            data:{
                from:this.state.from,
                to:this.state.to
            },
            withCredentials:true
        })
        .then(res=>{
            this.setState({
                data:res.data,
                user:false,
                list:true
            })
            // alert('details accepted')
        })
        .catch(error=>{
            alert('places not found')
        })
    }
    handleLogout(){
        axios({
            method:'post',
            url:'http://localhost:3001/ruser/logout',
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
export default User
