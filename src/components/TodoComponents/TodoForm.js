import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addStudent}>
      <input
        type="text"
        value={props.todo}
        name="todo"
        onChange={props.handleChanges}
        placeholder="todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
