import React, { useState, Fragment } from "react";
import Todos from "./Todos";

const TodoForm = (props) => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);
  const [value, setValue] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };

  const handleCompleteSubmit = (index) => {
    const newTodos = [...todos];
    // ? (newTodos[index].isCompleted = true)
    // : (newTodos[index].isCompleted = false);
    if (!newTodos[index].isCompleted) {
      newTodos[index].isCompleted = true;
    } else {
      newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      <Todos
        removeTodo={removeTodo}
        handleCompleteSubmit={handleCompleteSubmit}
        todos={todos}
      />
    </Fragment>
  );
};

export default TodoForm;
