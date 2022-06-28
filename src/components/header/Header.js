import "./Header.scss";
import { useFilters } from "../../context";
import removeIcon from "../../assets/images/icon-remove.svg";

export const Header = () => {

  const { filters } = useFilters();

  return (
    <header>
      {filters && <div className="filter-bar">
        <div className="filter-container">
          {filters.map(filter => (
            <div className="filter">
              <span>{filter}</span>
              <button><img src={removeIcon} alt="Remove filter" /></button>
            </div>
          ))}
        </div>
        <button className="clear-btn">Clear</button>
      </div>}
    </header>
  );
}