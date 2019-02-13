import React from 'react';

function Todo(props) {
    return (
        <div>
            <h3>{props.todo.inputTodo}</h3>
        </div>
    )
}

export default Todo;