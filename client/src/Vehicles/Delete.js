import React, { Component } from 'react'
import axios from 'axios';
import bootstrap from 'bootstrap';
import App from '../App';
import Admin from './Homepage';

class Delete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delete: true,
            model:'',
            data:[]
           
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleModel= this.handleModel.bind(this)
        this.handleList=this.handleList.bind(this)

    }
    render() {
        var border={border_collapse:'collapse',border:'1px solid black',align:'left'};

        var deletePage = (

            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Admin Homepage</p>
                </header>
                <form>
                    <label>model:</label>
                    <input type='text' placeholder='vehicle name' onChange={this.handleModel}/>
                    <br/>
                    <br/>
                    
                    <button type="button" onClick={this.handleDelete}>Delete</button>
                    <br />
                    <table style={border} >
                        <thead style={border}>
                            <tr style={border} >
                                <th style={border} >model</th>
                                <th style={border}>status</th>
                                                             
                             </tr>
                        </thead>
                        <tbody style={border}>{this.state.data.map(function(item,key){
                            return(
                                <tr style={border} key={key}>                               
                                    <td style={border}>{item.model}</td>
                                    <td style={border}>{item.status}</td>
                                   
                                                                                                            
                                    
                                </tr>
                            )
                        })} </tbody>


                    </table>
                    <br />
                    <button type='button' onClick={this.handleBack}>Back</button>

                </form>


            </div>
        );
        
        return (
            <div>
                {this.state.delete ? deletePage : null}
                {this.state.back ? <Admin /> : null}

            </div>
        )
    }
    
    componentWillMount(){
        this.handleList()
    }
    handleList(){
        axios({
            method: 'get',
            url: 'http://localhost:3001/vehicles/list',
            
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    data: res.data
                   
                               
                })
                // alert('details deleted')
            })
            .catch(error => {
                alert('add correct details')
            })
    }
    handleModel(event) {
        this.setState({
            model: event.target.value
        })
    }
    
    handleDelete() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/vehicles/delete',
            data: {
                model:this.state.model,
                
            },
            withCredentials: true
        })
            .then((res) => {
                this.setState({
                    model: '',
                   
                               
                })
                alert('details deleted')
            })
            .catch(error => {
                alert('add correct details')
            })
            

    }
    
    handleBack() {
        this.setState({
            delete: false,
            back: true
        })
    }

}
export default Delete