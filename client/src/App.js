import React, { Fragment } from "react";
import TodoForm from "./components/TodoForm";
import "./css/style.css";

const App = (props) => {
  return (
    <Fragment>
      <h1>Get it done</h1>
      <div className="main">
        <TodoForm />
      </div>
    </Fragment>
  );
};

export default App;
