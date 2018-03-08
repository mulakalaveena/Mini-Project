import React, { Component } from 'react'
import bootstrap from 'bootstrap';
import Create from './Create'
import Update from './Update'
// import List from './List'
// import Delete from './Delete'
import axios from 'axios'
import Admin from '../Admin/Homepage'

//import Search from '../Admin/Search'


class Driver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adminHomepage: true,
            create: false,
            update: false,
            delete: false,
            list: false,
            // role: '',
            // loe: true,
            // data:[]

        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleList = this.handleList.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleBack = this.handleBack.bind(this)

    }
    render() {
        var adminHomepage = (
            <div className="App">
                <header className="App-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <p>Vehicle Homepage</p>
                </header>
                <div>

                </div>
                <form>
                    <button type="button" onClick={this.handleCreate} class="btn btn-primary">Create</button>
                    <button type="button" onClick={this.handleUpdate} class="btn btn-secondary">Update</button>
                    <button type="button" onClick={this.handleList} class="btn btn-success">List</button>
                    <button type="button" onClick={this.handleDelete} class="btn btn-danger">Delete</button>
                    <br/>
                    <br/>
                    <button type='button' onClick={this.handleBack} >back</button>
                    
                </form>
            </div>
        );

        return (
            <div>
                {this.state.adminHomepage ? adminHomepage : null}
                {this.state.create ? <Create /> : null}
                {this.state.update ? <Update /> : null}
                {/* {this.state.list?<List/>:null} */}
                {/* {this.state.delete ? <Delete /> : null} */}
                {this.state.back ? <Admin /> : null}
              
            </div>
        )
    }
    handleCreate() {
        this.setState({
            adminHomepage: false,
            create: true
        })
    }
    handleUpdate() {
        this.setState({
            adminHomepage: false,
            create: false,
            update: true
        })
    }
   
    handleList() {
        axios({
            method: 'get',
            url: 'http://localhost:3001/vehicles/list',
            withCredentials: true
        })
            .then(places => {
                this.setState({
                    places: places.data,
                    adminHomepage: false,
                    create: false,
                    update: false


                })

            })
            .catch(error => {
                alert('notes not found')
            })
    }
    handleDelete() {
        this.setState({
            adminHomepage: false,
            create: false,
            update: false,
            list: false,
            delete: true
        })
    }
    handleBack() {
        this.setState({
            back: true,
            adminHomepage: false,
            create: false,
            update: false,
            list: false,
            delete: false
        })
    }

    

}


export default Driver




















