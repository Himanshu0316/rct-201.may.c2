import { Input } from "./Input";
import main from "./main.css"
export const Pagination = ({ total, selected, onPageChange }) => {
  return <div className="pageContainer">
    {new Array(total).fill(1).map((_, index, arr) => {
    return(
     

      <input
      className="inPut"
      key={index}
      value={index+1}
      />
    )
  })}
  </div>;
  
};
