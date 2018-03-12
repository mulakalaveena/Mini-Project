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
        var listpage= (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                    <h4>List of places</h4>
                </header>
                <form>
                    
                    
                    <table  class='table'>
                        <thead >
                            <tr  >
                                <th scope="col"  >from</th>
                                <th scope="col" >to</th>
                                <th scope="col">route1</th>
                                <th scope="col">route2</th>
                                <th scope="col">time(hrs)</th>
                               
                                

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
                                <td><button value='delete' class="btn btn-danger" onClick={this.handleDelete.bind(this,key)} type='button'>delete</button></td>
                                    
                                </tr>
                            )
                         },this)} </tbody>


                    </table>
                    <button type='button'class='btn btn-outline-info' onClick={this.handleBack}>Back</button>
                    
                   
                   
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