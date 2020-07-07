import React, { useState } from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="app">
      <div className="todo-list">
        {props.todos.map((todo, index) => (
          <Todo
            removeTodo={props.removeTodo}
            handleCompleteSubmit={props.handleCompleteSubmit}
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
