import { useContext } from "react";
import { DispatchContext } from "./contexts";

const Todo = ({id, content, isCompleted}) => {
  const dispatch = useContext(DispatchContext);

  function handleCheck() {
    dispatch({
      type: "updateStatus",
      id
    });
  }

  function handleDestroy() {
    dispatch({
      type: "destroy",
      id
    });
  }

  return (
    <li className={isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox" 
          checked={isCompleted}
          onChange={handleCheck} />
        <label>{ content }</label>
        <button className="destroy" onClick={handleDestroy}></button>
      </div>
    </li>
  );
}
 
export default Todo;