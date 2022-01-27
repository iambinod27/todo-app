import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [work, setWork] = useState("");

  const addList = (e) => {
    setWork(e.target.value);
  };

  const addingTodo = (e) => {
    e.preventDefault();

    if (work === "") {
      alert("field is empty");
    } else {
      setTodos((prevTodo) => [
        ...prevTodo,
        { id: new Date().getSeconds().toString(), todo: work },
      ]);
      setWork("");
    }
  };

  return (
    <form onSubmit={addingTodo}>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={work}
          onChange={addList}
        />
      </div>
    </form>
  );
};

export default AddTodo;
