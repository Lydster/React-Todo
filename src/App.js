import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
  {
    name: 'Reflect',
    id: 3472845238432,
    completed: false
    
  },
  {
    name: 'Breathe',
    id: 3472845238666,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos //same as todos: todos, 
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  };

  clearTodos = e => {
    e.preventDefault();
    console.log('running!');
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>To-Do</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <ul className="todo-list">
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
        </ul>
        <button onClick={this.clearTodos}>Clear</button>
      </div>

    );
  }
}

export default App;
