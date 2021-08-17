import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App bg-gray-100">
      <Nav />
      <h1 className="text-3xl py-5 pl-3 text-steinNav max-w-5xl mx-auto">
        Staff Directory
      </h1>
      <p className="py-2 pl-3 text-steinNav  max-w-5xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        <br />
        bibendum laoreet.
      </p>
      <Filter />
      <div className="py-4 pl-3 bg-gray-100 max-w-5xl mx-auto">
        <h1 className="text-steinNav text-xl pb-4 border-b-4 w-80 border-steinPink">
          Showing 94 colleague(s)
        </h1>
      </div>
      <Cards />
    </div>
  );
}

export default App;
