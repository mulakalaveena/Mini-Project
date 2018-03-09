import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Admin from './Homepage'



class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            data:[],
            list:true
           
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleBack=this.handleBack.bind(this)
        
    }

    render() {
        var border={border_collapse:'collapse',border:'1px solid black',align:'left'};
        var listpage= (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    
                    
                    <table style={border} id='tb'>
                        <thead style={border}>
                            <tr style={border} >
                                <th style={border}  >from</th>
                                <th style={border}>to</th>
                                <th style={border}>route1</th>
                                <th style={border}>route2</th>
                                <th style={border}>time(hrs)</th>
                               
                                

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
                                <td><button value='delete' id='del' onClick={this.handleDelete.bind(this,key)} type='button'>delete</button></td>
                                    
                                </tr>
                            )
                         },this)} </tbody>


                    </table>
                    <button type='button' onClick={this.handleBack}>Back</button>
                    
                   
                   
                </form>
            </div>
        )
        return(
            <div>
                {this.state.list?listpage:null}
                {this.state.back?<Admin/>:null}
            </div>
        )
    }
    componentWillMount(){
        this.handleSubmit()
    }

   
    
   handleDelete(key){
    axios({
        method: 'post',
        url: 'http://localhost:3001/places/delete',
        data: {
            from: this.state.data[key].from,
            
        },
        withCredentials: true
    })
    .then(() => {
        this.setState({
            from: '',
            
        })
        alert('details deleted')
        this.handleSubmit()
    })
    .catch(error => {
        alert('add correct details')
    })
   }
    handleSubmit() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/places/list',
            
            withCredentials: true
        })
        .then((res) => {
            this.setState({
                
                data:res.data
                
            })
        })
        .catch(error => {
            alert('add correct details')
        })
    }
    handleBack(){
        this.setState({
            list:false,
            back:true
        })
    }
}
export default List