import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoStatus() {
  const [todos, setTodos] = useContext(TodoContext);

  const removeDone = () => {
    const newTodos = todos.filter((item) => item.done === false);

    setTodos(newTodos);
  };

  return (
    <div className="todo-status">
      <p>{todos.length} items left</p>
      <p className="clear" onClick={() => removeDone()}>
        Clear Completed
      </p>
    </div>
  );
}
