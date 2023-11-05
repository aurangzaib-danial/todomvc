import { activeCount } from "./todosHelper";
import { DispatchContext } from "./contexts";
import { useContext } from "react";
import Todo from "./Todo";

const Main = ({todos}) => {
  const dispatch = useContext(DispatchContext);

  function handleToggle() {
    if (todos.length === 0) {
      return;
    }
    
    if (activeCount(todos) >= 1) {
      dispatch({
        type: "markAllComplete"
      });
    }
    else {
      dispatch({
        type: "markAllActive"
      });
    }
  }
  
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleToggle} />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              {...todo} />
          );
        })}
      </ul>
    </section>
  );
}
 
export default Main;