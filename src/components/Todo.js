import React, { Component } from 'react'
import { FormCheck } from 'react-bootstrap';

export class Todo extends Component {

    // constructor(props){
    //         super(props);
    //         this.state= {
    //             title:'add your tasks here',
    //             complete:true,
            
    //         }
    //}

    render() {
        return (
            <div>
                <div className='todo'>
                <p style={{textDecoration:this.props.todo.complete?'line-through':''}}>{this.props.todo.title}</p>
                <div className='status'>
                <button className='complete' onClick={() => this.props.completeTodo(this.props.todo.id)}>✔</button>
                <button className='delete' onClick={() => this.props.deleteTodo(this.props.todo.id)}>❌</button>
                </div> 
                </div>
            </div>
        )
    }
}

export default Todo;
