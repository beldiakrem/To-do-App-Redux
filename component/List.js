import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletetodo, complete, edit} from '../actions/index'

 class List extends Component {
    constructor(props){
        super(props)
        this.state={
            edittext: ""
        }
      }
      handleedit=e=>{
        this.setState({
          edit:e.target.value
        })
         }
 
    render() {
        return (
            <div className="list">
                <h3> Let's get some work done! </h3>
                {this.props.counter.map((el => (
                    <div key={el.key }className="button-list">

                        <div>
                            <button onClick={() => this.props.complete(el.key)}>
                                {el.isCompleted ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => this.props.deletetodo(el.key)}>Delete</button>
                        </div>
                        <div>
                        <button onClick={(e)=>{e.preventDefault();this.setState({edittext:el.title});this.props.edit({...el,title:this.state.edittext})}}> Edit</button>
                        </div>
                        <div >
                            <h3 className={el.isCompleted ? "completed" : ""} >{el.title} </h3>
                        </div>
                        
                    </div>
                )))}
            </div>
        )
    }
}
 
const s = state => {
  return{ counter : state}
}

const d = dispatch => {
    return {
    deletetodo : (payload) => dispatch (deletetodo(payload)),
    complete : (payload) => dispatch (complete(payload)),
    edit:payload => dispatch(edit(payload))
    }
 }
 
export default connect (s,d) (List)