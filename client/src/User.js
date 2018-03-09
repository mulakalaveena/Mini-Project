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
        var border={border_collapse:'collapse',border:'1px solid black',align:'left'};

        var userpage=(
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>User page</p>
                </header>
            <form>
            <label>from:</label>
            <select value={this.state.from} onChange={this.handleFrom}  >
            <option value='select'>select a place</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Adilabad">Adilabad</option>
                <option value="Nirmal">Nirmal</option>

            </select>
            <br />
            <label>to:</label>
            <select value={this.state.to} onChange={this.handleTo}  >
            <option value='select'>select a place</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Adilabad">Adilabad</option>
                <option value="Nirmal">Nirmal</option>

            </select>
            <br/>
            <br/>
            <button type='button' onClick={this.handleClick}>Search</button>
            <button type='button' onClick={this.handleLogout}>Logout</button>
            
            </form>

            </div>
        );
        var list=(
            <div>
            <table style={border} >
                        <thead style={border}>
                            <tr style={border} >
                                <th style={border} >from</th>
                                <th style={border}>to</th>
                                <th style={border}>route1</th>
                                <th style={border}>route2</th>
                                <th style={border}>time</th>
                                <th style={border}>driver</th>
                                <th style={border}>vehicle</th>
                                
                             </tr>
                        </thead>
                        <tbody style={border}>{this.state.data.map(function(item,key){
                            return(
                                <tr style={border} key={key}>                               
                                    <td style={border}>{item.from}</td>
                                    <td style={border}>{item.to}</td>
                                    <td style={border}>{item.route1}</td>
                                    <td style={border}>{item.route2}</td>
                                    <td style={border}>{item.time}</td>
                                    <td style={border}>{item.driver}</td>
                                    <td style={border}>{item.vehicle}</td>
                                                                                                            
                                    
                                </tr>
                            )
                        })} </tbody>


                    </table>
                    
                    <button type='button' onClick={this.handleLogout}>Logout</button>
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
