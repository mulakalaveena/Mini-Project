import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Manager from './Homepage'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            list:true,
            
           
        }
        this.handleList=this.handleList.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleBack=this.handleBack.bind(this)
        
    }

    render() {
        var listpage=(
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                    <h4>List of assignments</h4>
                </header>
                <form>
                    <table class='table'>
                        <thead >
                            <tr >
                                <th scope='col'  >from</th>
                                <th scope='col'  >to</th>
                                <th  scope='col' >route1</th>
                                <th  scope='col' >route2</th>
                                <th  scope='col' >time(hrs)</th>
                                <th  scope='col' >driver</th>
                                <th  scope='col' >vehicle</th>
                                <th  scope='col' >status</th>
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
                                    <td >{item.status}</td>
                                                                                                                                                
                                    <td><button value='delete' class='btn btn-danger' onClick={this.handleDelete.bind(this,key)} type='button'>delete</button></td>
                                    
                                </tr>
                            )
                         },this)} </tbody>
                    </table>
                   
                    <button type='button'class='btn btn-outline-info' onClick={this.handleBack}>back</button>
                </form>
            </div>
        )
        return(
            <div>
                {this.state.list?listpage:null}
                {this.state.back?<Manager/>:null}
            </div>
        )
    }
    componentWillMount(){
        this.handleList()
    }
    handleBack() {
        this.setState({
            list: false,
            back: true
        })
    }
    
    handleList() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/finals/list',
           
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
    handleDelete(key){
        axios({
            method: 'post',
            url: 'http://localhost:3001/finals/delete',
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
            this.handleList()
        })
        .catch(error => {
            alert('add correct details')
        })
    }
}
export default List