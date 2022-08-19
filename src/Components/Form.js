import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

function Form(props) {
  const unique_id = uuid();
  const input_name = props.input;

  function updateTodo(title, id, completed) {
    const newTodo = props.todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    props.setTodos(newTodo);
    props.setEditTodo('');
  }

  useEffect(() => {
    if (props.editTodo) {
      props.setInput(props.editTodo.title);
    } else {
      props.setInput('');
    }
  }, [props.editTodo, props.setInput]);

  function onInputChange(event) {
    props.setInput(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (!props.editTodo) {
      props.setTodos([
        ...props.todos,
        { id: unique_id, title: input_name, completed: false },
      ]);
      props.setInput('');
    } else {
      updateTodo(props.input, props.editTodo.id, props.editTodo.completed);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={props.input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
