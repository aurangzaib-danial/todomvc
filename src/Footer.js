import Filter from "./Filter";
import { DispatchContext } from "./contexts";
import { useContext } from "react";

const Footer = ({activeCount, showClear}) => {
  const dispatch = useContext(DispatchContext);

  function handleClearCompleted() {
    dispatch({
      type: "clearCompleted"
    });
  }

  return ( 
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> 
        { " " }
        item{activeCount !== 1 ? "s" : ""} left
      </span>
      <ul className="filters">
        {["All", "Active", "Completed"].map(f => {
          return <Filter key={f} thisFilter={f} />;
        })};
      </ul>
      {showClear && <button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button> }
    </footer>
  );
}
 
export default Footer;
