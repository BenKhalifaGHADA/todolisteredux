import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addNewTask} from '../actions/Action';
import './Add.css';
import{Button} from 'react-bootstrap'



class Add extends Component {
    state={
        value:"",
        
    }
    
    onChangeValue =(event) => {
        this.setState({value : event.target.value} );
      
      }
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <h1 >Daily Todo Lists</h1>
                    </div>
                </div>
                <div class="col-12">
                    
                <input type="text" value={this.state.value} onChange={this.onChangeValue}/>
                <Button variant="success" onClick={()=>{this.props.addTask(this.state.value)}} >+</Button>
                {/* <button class="primary" onClick={()=>{this.props.addTask(this.state.value)}}>+</button> */}
                <span></span>
                    </div>
                <div>
                </div>
               
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
   addTask:(payload)=>dispatch(addNewTask(payload)) 
});

export default connect(null,mapDispatchToProps)(Add)