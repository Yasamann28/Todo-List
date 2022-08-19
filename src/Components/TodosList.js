import React from 'react';

function TodosList(props) {
  function handleComplete(todo) {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }
  function handleEdit({ id }) {
    const findTodo = props.todos.find((todo) => todo.id === id);
    props.setEditTodo(findTodo);
  }
  function handleDelete({ id }) {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      {props.todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="btns-holder">
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodosList;
