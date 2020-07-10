import React, { Fragment } from "react";

const Todo = ({ removeTodo, todo, index, handleCompleteSubmit }) => {
  return (
    <Fragment>
      <div className="todosList"></div>
      {todo.isCompleted === true ? (
        <div
          className={`todosList__complete todosList__complete--${todo.priority}`}
        >
          {todo.text}
          <button onClick={() => handleCompleteSubmit(index)}>undo</button>
          <button onClick={() => removeTodo(index)}>delete</button>
        </div>
      ) : (
        <div
          className={`todosList__incomplete todosList__incomplete--${todo.priority}`}
        >
          {todo.text}
          <button onClick={() => handleCompleteSubmit(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>delete</button>
        </div>
      )}
    </Fragment>
  );

  {
    /* //   isCompleted ? (
  //     <div className="todo" style="textDecoration: line-through">
  //       {todo.text}
  //     </div>
  //   ) : (
  //     <div className="todo">{todo.text}</div>
  //   );

  //   <button onClick={() => handleCompleteSubmit(index)}>Complete</button>; */
  }
};

export default Todo;
