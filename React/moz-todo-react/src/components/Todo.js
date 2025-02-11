import React from "react";

function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          onChange={() => {
            props.toggleTaskCompleted(props.id);
          }}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
