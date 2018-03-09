import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Vehicle from './Homepage'



class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:true,
            data:[],

           
        }
        this.handleList=this.handleList.bind(this)
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
                    <p>Admin Homepage</p>
                </header>
                <form>
                    
                    <table style={border} id='tb'>
                        <thead style={border}>
                            <tr style={border} >
                                <th style={border}>model</th>
                                <th style={border}>status</th>
                                                              
                             </tr>
                        </thead>
                        <tbody style={border}>{this.state.data.map(function(item,key){
                            return(
                                <tr style={border} key={key}>                               
                                    <td style={border}>{item.model}</td>
                                    <td style={border}>{item.status}</td>
                                    
                                <td><button value='delete' onClick={this.handleDelete.bind(this,key)} id='del' type='button'>delete</button></td>
                                    
                                    
                                </tr>
                            )
                        }, this)} </tbody>
                    </table>
                    <button type='button' onClick={this.handleBack}>back</button>
                </form>
            </div>
        )
        return(
            <div>
                {this.state.list?listpage:null}
                {this.state.back?<Vehicle/>:null}
            </div>
        )
    }
    componentWillMount(){
        this.handleList()
    }

    handleDelete(key){
        axios({
            method: 'post',
            url: 'http://localhost:3001/vehicles/delete',
            data: {
                model: this.state.data[key].model,
                
            },
            withCredentials: true
        })
        .then(() => {
            this.setState({
                from: '',
                
            })
            alert('details deleted')
            this.handleList()
        })
        .catch(error => {
            alert('add correct details')
        })
       
    }
    handleList(){
         axios({
            method: 'get',
            url: 'http://localhost:3001/vehicles/list',
            
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
            back:true,
            list:false
        })
    }

   
}
export default List