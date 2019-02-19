import React from 'react';

function Todo(props) {
    return (
        <div className={`todo${props.todo.completed ? 'completed' : ''}`}
        onClick={() => props.toggleTodo(props.todo.id)}
        >

            <h3 className='eachTodo'>{props.todo.name}</h3>
        </div>
    )
}

export default Todo;