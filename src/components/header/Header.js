import "./Header.scss";
import { useFilters } from "../../context";
import removeIcon from "../../assets/images/icon-remove.svg";

export const Header = () => {

  const { filters, setFilters } = useFilters();

  const removeFilter = (e) => {
    //need a solution here
  }

  const emptyFilters = () => {
    setFilters([]);
  }

  return (
    <header>
      {filters && <div className="filter-bar">
        <div className="filter-container">
          {filters.map(filter => (
            <div className="filter">
              <span>{filter}</span>
              <button onClick={removeFilter}><img src={removeIcon} alt="Remove filter" /></button>
            </div>
          ))}
        </div>
        <button className="clear-btn" onClick={emptyFilters}>Clear</button>
      </div>}
    </header>
  );
}