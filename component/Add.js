import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions/index'


 class Add extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

   handleChange = e => {
       this.setState({
           input: e.target.value
       })
   }

   handleClick = e => {
    e.preventDefault();
    this.props.addtodo(
        {key:Math.random(),
            title: this.state.input,
            isCompleted: false
        })
   }
     
   render() {
    return (
        <div className="add">
            <div className="title">
                <h1> To-Do App!</h1>
                <p> Add New To-Do  </p>
            </div>
            <form>
                <div>
                    <div className="input">
                        <input type="text"

                            placeholder="Enter new Task"
                            value={this.state.input}
                            onChange={this.handleChange}
                                 />
                    </div>
                    <div className="button">
                        <button onClick={this.handleClick}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
 }
const d = dispatch => ({
    addtodo : (payload) => dispatch (addtodo(payload))
 })
export default connect (null,d) (Add)
