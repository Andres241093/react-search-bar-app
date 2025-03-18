import SearchComponent from "./components/SearchComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent onSearch={(results) => console.log(results)} />
      </header>
    </div>
  );
}

export default App;
