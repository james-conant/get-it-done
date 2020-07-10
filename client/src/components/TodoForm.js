import React, { useState, Fragment } from "react";
import Todos from "./Todos";

const TodoForm = (props) => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false, priority: "Low" },
    { text: "Meet friend for lunch", isCompleted: true, priority: "Medium" },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      priority: "High",
    },
  ]);
  const [value, setValue] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const addTodo = (text, priority) => {
    const newTodos = [...todos, { text, priority }];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value, todoPriority);
    setValue("");
    setTodoPriority("Medium");
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

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setTodos(e);
  // };

  return (
    <Fragment>
      <div className="main__top">
        <div className="main__form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
        <div className="main__picker">
          <select
            value={todoPriority}
            onChange={(e) => setTodoPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="main__todoSubmit">
          <input onClick={handleSubmit} type="submit" value="Submit" />
        </div>
      </div>

      <div className="main__todos">
        <Todos
          priority={todos.priority}
          removeTodo={removeTodo}
          handleCompleteSubmit={handleCompleteSubmit}
          todos={todos}
        />
      </div>
    </Fragment>
  );
};

export default TodoForm;
