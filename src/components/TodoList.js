import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import checkmark from "../images/icon-check.svg";
import remove from "../images/icon-cross.svg";

const TodoList = () => {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useContext(TodoContext);

  const [check, setCheck] = useState("un-done");

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

  const removeDone = (id) => {
    const newTodos = todos.filter((item) => {
      if (item.done === true) {
        removeItem(id);
      }

      return newTodos;
    });
  };

  const checkItem = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
        }
        return item;
      })
    );
  };

  const clearDone = (id) => {};

  return (
    <>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo-info">
            <div className="checkmark" onClick={() => checkItem(todo.id)}>
              <img
                src={checkmark}
                alt=""
                className={`${todo.done ? "done" : "un-done"}`}
              />
            </div>
            <p className={`${todo.done ? "todo-work" : ""}`}>{todo.todo}</p>
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
