import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import Admin from './Homepage';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: true,
            username:'',
            data:[]
           
        }
        this.handleList = this.handleList.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleDelete= this.handleDelete.bind(this)

    }
    render() {
        var border={border_collapse:'collapse',border:'1px solid black',align:'left'};

        var listPage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <table style={border} id='tb'>
                    <thead style={border}>
                        <tr style={border} >
                            <th style={border}>username</th>
                            <th style={border}>status</th>
                            
                            </tr>
                    </thead>
                    <tbody style={border}>{this.state.data.map(function(item,key){
                        return(
                            <tr style={border} key={key}>                               
                                <td style={border}>{item.username}</td>
                                <td style={border}>{item.status}</td>
                                
                            <td><button value='delete' id='del' onClick={this.handleDelete.bind(this,key)} type='button'>delete</button></td>
                                
                            </tr>
                        )
                    },this)} </tbody>
                </table>
                <button type='button' onClick={this.handleBack}>back</button>

            </div>
        );
        
        return (
            <div>
                {this.state.list ? listPage : null}
                {this.state.back ? <Admin /> : null}

            </div>
        )
    }
    
    componentWillMount(){
        this.handleList()
    }
    
    
    handleList() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/drivers/list',
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    data: res.data         
                })
                //alert('details deleted')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    
    handleBack() {
        this.setState({
            list: false,
            back: true
        })
    }
    handleDelete(key){
        axios({
            method: 'post',
            url: 'http://localhost:3001/drivers/delete',
            data: {
                username: this.state.data[key].username,
                
            },
            withCredentials: true
        })
        .then(() => {
            this.setState({
                username: '',
                
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