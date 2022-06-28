import { Header, Listings } from "./components";
import { FilterProvider } from "./context";


function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Header />
        <Listings />
      </div>
    </FilterProvider>
  );
}

export default App;
