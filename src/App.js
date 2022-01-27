import React from "react";
import TodoList from "./components/TodoList";
import sun from "./images/icon-sun.svg";
import "./styles/styles.scss";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoStatus from "./components/TodoStatus";

function App() {
  return (
    <TodoProvider>
      <section>
        <header>
          <div className="container">
            <div className="logo">TODO</div>
            <img src={sun} alt="" className="dark light" />
          </div>
        </header>
        <div className="container">
          <article>
            <AddTodo />

            <div className="grid-container">
              <div className="todo-list">
                <TodoList />
                <TodoStatus />
              </div>

              <div className="grid-item">
                <div className="todo-all">
                  <ul>
                    <li className="all">All</li>
                    <li className="active">Active</li>
                    <li className="completed">Completed</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </TodoProvider>
  );
}

export default App;
