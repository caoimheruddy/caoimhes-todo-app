import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

      this.state={
        newTodo:"",
        todoList:[]
      }

    }

    updateInput(key, value){
      //updates react state
      this.setState({
      [key]:value
      });
    }


    addTodo(){
      //create todo with id that is unique to each todo
      const newTodo={
        id: 1+Math.random(),
        value: this.state.newTodo.slice()
      };

      //copy of current list of todos
      const todoList =[...this.state.todoList];

      //add new todo to list of todos
      todoList.push(newTodo);

      //updates state with newtodolist and reset newtodo input
      this.setState({
        todoList,
        newTodo:""
      });
    }

    deleteItem(id){
      //copy of list of todos
      const todoList=[...this.state.todoList];

      //filters todos being deleted
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      this.setState({todoList: updatedTodoList});
    }
  
  render() {
    return (
      <div className="App">
        <div className="todoWrapper">
          <h1>Caoimhe's To-Do List!</h1>
          <br/>
          <input className="inputBox"
          type="text"
          placeholder="Enter task to-do .."
          value={this.state.newTodo}
          onChange={e => this.updateInput("newTodo", e.target.value)}
          />
          <button className="addButton" onClick={() => this.addTodo()}>
            Add To-Do
          </button>
          <br/>
          <div className="listOfTodos">
          <ul>
            {this.state.todoList.map(todo => {
              return(
                <li key={todo.id}>
                  {todo.value}
                  <button className="deleteButton" onClick={() => this.deleteItem(todo.id)}>
                    Delete
                  </button>
              

            </li>
            )}
            )}
          </ul>
          </div>
        </div>
      </div>
     );
  }
}

export default App;
