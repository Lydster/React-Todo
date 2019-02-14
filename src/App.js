import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
  {
    inputTodo: 'this thing I gotta do',
    id: 3472845238432,
    completed: false
    
  },
  {
    inputTodo: 'this other thing I gotta do',
    id: 3472845238666,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos: todos,
      inputTodo: "",
      
    }
  }

  addTodo = e => {
    e.preventDefault();
    console.log(e.target);


    const newTodo = {
      inputTodo: this.state.inputTodo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });

  };


  handleChanges = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>What is there To Do?!</h1>
        <ul className="todo-list">
        <Todo />
          {this.state.todos.map((todoFromMap, idx) => {
            console.log(todoFromMap.inputTodo)
            return (
           <li key={idx} > {todoFromMap.inputTodo} </li>
           
          )})}
        </ul>
        <TodoForm 
          addTodo={this.addTodo}
          inputTodo={this.state.inputTodo}
          handleChanges={this.handleChanges}
        />
        
      </div>

    );
  }
}

export default App;
