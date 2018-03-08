import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';



class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            data:[]
           
        }
        this.handleFrom = this.handleFrom.bind(this)
        
    }
    render() {
       
        return (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    
                    <label>from:</label>
                    <select value={this.state.from} onChange={this.handleFrom}  >
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Adilabad">Adilabad</option>
                        <option value="Nirmal">Nirmal</option>

                    </select>
                    <br/>
                
                    <table >
                        <tbody>{this.state.data.map(function(item,key){
                            return(
                                <tr key={key}>
                                    <th >from</th>
                                    <th>to</th>
                                    <th>route1</th>
                                    <th>route2</th>
                                    <th>time</th>
                                
                                    <td >{item.from}</td>
                                    <td >{item.to}</td>
                                    <td >{item.route1}</td>
                                    <td >{item.route2}</td>
                                    <td >{item.time}</td>
                                </tr>
                            )
                         })} </tbody>


                    </table>
                    <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
    handleFrom(event) {
        this.setState({
            from: event.target.value
        })
    }
   
    handleSubmit() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/places/list',
            data: {
                from: this.state.from
                
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    from: '',
                    data:res.data
                    
                })
                alert('details added')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
}
export default List