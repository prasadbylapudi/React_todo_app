import React, { Component } from 'react'
import { Form } from 'reactstrap'

export class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoText:''
        }
    }

    addTodo=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.todoText);

        //this is to make the input field empty after click submit
        this.setState({ todoText: '' });
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.addTodo}>
               <div className='todoForm'>
                    <input 
                    type='text' 
                    value={this.state.todoText}
                     onChange={(e)=>this.setState({todoText:e.target.value})} 
                     placeholder='enter your tasks here....'>
                     </input>
                </div>
               </Form>
            </div>
        );
    }
}

export default TodoForm;
