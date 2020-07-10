import React, { Fragment } from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <Fragment>
      <div className="main__todos">
        {props.todos.map((todo, index) => (
          <Todo
            removeTodo={props.removeTodo}
            handleCompleteSubmit={props.handleCompleteSubmit}
            priority={props.priority}
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Todos;
