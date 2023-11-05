import { useContext } from "react";
import { FilterContext } from "./contexts";

const Filter = ({thisFilter}) => {
  const filterContext = useContext(filterContext);

  return ( 
    <li>
      <a 
        href="#" 
        className={filterContext.filter === thisFilter ? "selected" : ""}
        onClick={() => filterContext.onFilterClick(thisFilter)}
      >
        {thisFilter}
      </a>
    </li>
  );
}
 
export default Filter;
