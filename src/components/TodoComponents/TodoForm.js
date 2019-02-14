import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={e => props.addTodo(e)}>
      <input
        type="text"
        name='inputTodo'
        value={props.inputTodo}
        onChange={e => props.handleChanges(e)}
        placeholder="todo"
        
      />
      <button type="submit">Add Todo</button>
      <button>Clear</button>
    </form>
  );
};

export default TodoForm;
