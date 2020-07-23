import React, { useState, useEffect, Fragment } from "react";
import Todos from "./Todos";
import Axios from "axios";

const TodoForm = (props) => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await Axios.get("/api/todos");
      console.log(todos.data);
      setTodos(todos.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    const newTodos = [
      ...todos,
      { text, priority: todoPriority, isCompleted: "false" },
    ];
    try {
      const add = await Axios.post(
        "/api/todos/add",
        newTodos[newTodos.length - 1]
      );
      const newb = [
        ...todos,
        { text, priority: todoPriority, isCompleted: "false", _id: add.data },
      ];
      setTodos(newb);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
    setTodoPriority("Medium");
  };

  const handleCompleteSubmit = async (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === "true") {
      newTodos[index].isCompleted = "false";
    } else {
      newTodos[index].isCompleted = "true";
    }
    const id = newTodos[index]._id;
    setTodos(newTodos);
    try {
      let todoData = newTodos[index];

      await Axios.post(`/api/todos/update/${id}`, todoData);

      console.log(todoData);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = async (e) => {
    const that = todos[e]._id;
    const newTodos = [...todos];
    newTodos.splice(e, 1);
    setTodos(newTodos);
    try {
      await Axios.delete(`/api/todos/delete/${that}`);
    } catch (err) {
      console.log(err);
    }
  };

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
