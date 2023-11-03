import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            autoFocus
            onChange={handleChange} />
        </header>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox" />
          <label for="toggle-all">
            Mark all as complete
          </label>
          <ul className="todo-list">
            <li class="completed">
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox" />
                <label>Buy milk</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>1</strong> item left</span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Create by Aurangzaib Khan</p>
      </footer>
    </>
  );
}

export default App;
