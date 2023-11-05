import { useContext, useState, useRef } from "react";
import { DispatchContext } from "./contexts";
import { flushSync } from "react-dom";

const Todo = ({id, content, isCompleted}) => {
  const dispatch = useContext(DispatchContext);
  const [status, setStatus] = useState("readOnly");
  const inputRef = useRef(null);

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

  function handleChange(e) {
    dispatch({
      type: "updateContent",
      content: e.target.value,
      id
    });
  }

  return (
    <li 
      className={(isCompleted ? "completed" : "") + (status === "editing" ? " editing" : "")} 
      onDoubleClick={()=> { 
        flushSync(() => {
          setStatus("editing");
        });
        inputRef.current.focus();
      }}
      onBlur={(e) => {
        if (status === "editing") {
          setStatus("readOnly");
          if (e.target.value === "") {
            handleDestroy();
          }
        }
      }}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox" 
          checked={isCompleted}
          onChange={handleCheck} />
        <label>{ content }</label>
        <button className="destroy" onClick={handleDestroy}></button>
      </div>
      {status === "editing" && <input className="edit" ref={inputRef} value={content} onChange={handleChange} />}
    </li>
  );
}
 
export default Todo;