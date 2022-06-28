import { useState, useContext, createContext } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {

  const [filters, setFilters] = useState([]);


  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}