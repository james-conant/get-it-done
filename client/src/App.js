import React, { Fragment } from "react";
import TodoForm from "./components/TodoForm";
import "./css/style.css";

const App = (props) => {
  return (
    <Fragment>
      <div className="main">
        <TodoForm />
      </div>
    </Fragment>
  );
};

export default App;
