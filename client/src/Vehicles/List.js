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
        var listpage= (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Vehicle list</p>
                </header>
                <form>
                    
                    <table class='table'>
                        <thead >
                            <tr  >
                                <th scope='col' >model</th>
                                <th scope='col'>status</th>
                                                              
                             </tr>
                        </thead>
                        <tbody >{this.state.data.map(function(item,key){
                            return(
                                <tr  key={key}>                               
                                    <td >{item.model}</td>
                                    <td >{item.status}</td>
                                    
                                <td><button value='delete' class='btn btn-danger'data-toggle="modal" data-target="#exampleModal"  type='button'>delete</button></td>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>are you sure you want to delete</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" onClick={this.handleDelete.bind(this,key)} data-dismiss="modal"class="btn btn-primary">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </tr>
                            )
                        }, this)} </tbody>
                    </table>
                    <button type='button'class='btn btn-outline-info' onClick={this.handleBack}>back</button>
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
            //alert('details deleted')
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