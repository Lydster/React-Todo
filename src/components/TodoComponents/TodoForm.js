import React from 'react';

const TodoForm = props => {
  return (
    <form >
      <input
        type="text"
        name='inputTodo'
        value={props.inputTodo}
        onChange={e => props.handleChanges(e)}
        placeholder="todo"
        onSubmit={e => props.addTodo(e)}
      />
      <button type="submit">Add Todo</button>
      <button onClick={e=> props.addTodo(e)} >Clear</button>
    </form>
  );
};

export default TodoForm;
