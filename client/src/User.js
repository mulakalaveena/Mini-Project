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
            </form>
            </div>
        );
        var list=(
            <table>
            <tbody>{this.state.data.map(function(item,key){
                return(
                    <tr key={key}>
                        <th >route1</th>
                        <th>route2</th>
                    
                        <td >{item.route1}</td>
                        <td >{item.route2}</td>
                    </tr>
                )
            })} </tbody>
            </table>
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
            alert('details accepted')
        })
        .catch(error=>{
            alert('places not found')
        })
    }
    
}
export default User
