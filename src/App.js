import './App.css';
import React,{Component} from 'react';
//import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
import Todo from './components/Todo';
import TodoForm from './TodoForm';

export default class App extends Component{
  
    //to create the list of todos we need to create the constructor.
    //just type rcons snippet your will get 
    constructor(props) {
      super(props)
    
      this.state = {
          todos: [{id:1,title:'first todo',complete:false},
                  {id:2,title:'second todo',complete:false}]

      }
    }

  
    addTodo=(title)=>{
          //console.log(todo);
          let todos=[...this.state.todos];
          let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
          let newTodo={
            //you can give it like id:id or simply id
            id,
            title,//here it's the parameter passed 
            complete:false,
          };
          todos.push(newTodo);
          this.setState({todos});
    };

   completeTodo = (id) => {
		let todos = [ ...this.state.todos ];
		todos.filter((todo) => {
			if (todo.id === id) {
				todo.complete = true;
			}
		});
		this.setState({ todos });
	};

    deleteTodo=(id)=>{

      let todos = [...this.state.todos];
      todos.filter((todo,index)=>{
          if(todo.id===id){
            todos.splice(index, 1);
          }
      });
      this.setState({todos});
    }



  render() {

  return(
    
      <div className='todoApp'>
      <h1 className='heading'>Todo Application<span>-All your tasks at one place</span></h1>
     <TodoForm addTodo={(todo)=>this.addTodo(todo)}/>
      {this.state.todos.map(todo=>( 
            <Todo 
            key={todo.id} 
            todo={todo}
            completeTodo={(id) => this.completeTodo(id)}
            deleteTodo={(id) => this.deleteTodo(id)}
            />
            )
      )}
       
      
      </div>
  )
  }
}
