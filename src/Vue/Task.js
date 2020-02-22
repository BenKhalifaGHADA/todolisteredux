import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {deleteTask} from '../actions/Action';
import Input from './Input'
import './Task.css'
import { Button} from 'react-bootstrap'

class Task extends Component {
    state={
        value:"",
        
    }
    
    render() {
        return (
            <div className="task">
                <p>{this.props.list}</p>
                <Button variant="secondary" onClick={()=>this.props.delete(this.props.id)}>
              Delete
            </Button>
            <Input id={this.props.id}/>
            </div>
        )
    }
}


const mapDispatchToProps=dispatch=>({
    delete:(id)=>dispatch(deleteTask(id))
    
 });
 
 export default connect(null,mapDispatchToProps)(Task)