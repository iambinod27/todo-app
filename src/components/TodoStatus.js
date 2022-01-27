import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoStatus() {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div className="todo-status">
      <p>{todos.length} items left</p>
      <p className="clear">Clear Completed</p>
    </div>
  );
}
