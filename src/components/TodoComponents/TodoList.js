// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
    return (
        <div className="todo-list">
            {sortedList.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />

            ))}
        </div>
    );
};

export default TodoList;

