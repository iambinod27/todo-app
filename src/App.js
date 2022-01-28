import React from "react";
import TodoList from "./components/TodoList";
import "./styles/styles.scss";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoStatus from "./components/TodoStatus";
import Header from "./components/Header";

function App() {
  return (
    <TodoProvider>
      <section className="dark">
        <Header />
        <div className="article-container">
          <article>
            <AddTodo />

            <div className="grid-container">
              <div className="todo-list">
                <TodoList />
                <TodoStatus />
              </div>
            </div>
          </article>
        </div>
      </section>
    </TodoProvider>
  );
}

export default App;
