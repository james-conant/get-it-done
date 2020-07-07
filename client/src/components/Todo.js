import React, { Fragment } from "react";

const Todo = ({ removeTodo, todo, index, handleCompleteSubmit }) => {
  return (
    <Fragment>
      {todo.isCompleted ? (
        <div className="todo" style={{ textDecoration: "line-through" }}>
          {todo.text}
          <button onClick={() => handleCompleteSubmit(index)}>undo</button>
          <button onClick={() => removeTodo(index)}>delete</button>
        </div>
      ) : (
        <div className="todo">
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
