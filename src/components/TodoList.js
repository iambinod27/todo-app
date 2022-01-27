import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import checkmark from "../images/icon-check.svg";
import remove from "../images/icon-cross.svg";

const TodoList = () => {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useContext(TodoContext);

  useEffect(() => {
    const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTodos) {
      setTodos(retriveTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const removeItem = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);

    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo-info">
            <div className="checkmark">
              <img src={checkmark} alt="" className="done" />
            </div>
            <p className="todo-work">{todo.todo}</p>
          </div>
          <img
            src={remove}
            alt=""
            className="remove"
            onClick={() => removeItem(todo.id)}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
