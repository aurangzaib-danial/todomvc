import { useState, useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { todosReducer, activeCount, someCompleted, filterTodos } from "./todosHelper.js";
import { DispatchContext, FilterContext } from "./contexts.js";
import Main from "./Main.js";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [filter, setFilter] = useState("All");
  const filteredTodos = filterTodos(todos, filter);

  function onFilterClick(f) {
    setFilter(f);
  }

  return (
    <>
      <section className="todoapp">
        <DispatchContext.Provider value={dispatch}>
          <Header />
          <Main todos={filteredTodos} />
          <FilterContext.Provider value={{filter, onFilterClick}}>
            <Footer
              activeCount={activeCount(todos)}
              showClear={someCompleted(todos)} />
          </FilterContext.Provider>
        </DispatchContext.Provider>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Create by Aurangzaib Khan</p>
      </footer>
    </>
  );
}

export default App;
