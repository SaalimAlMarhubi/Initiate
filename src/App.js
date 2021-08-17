import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const filterEl = useRef();

  const [data, setData] = useState("");

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    return (visibleMembers = data.filter((val) => {
      return search == ""
        ? val
        : val.name.toLowerCase().includes(search.toLowerCase());
    }).length);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "http://interview.dev.steinias.com/api/employees"
      );
      response = await response.json();
      setData(response);
      setLoading(true);
    };

    fetchData();
  }, []);

  let visibleMembers = data.length;

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
      <div className="py-4 pl-3 bg-white mx-auto w-full">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-steinNav text-2xl pb-3">Filter colleagues</h1>
          <input
            className="w-80 lg:w-96 h-14 rounded border-2 border-steinTeal p-2"
            type="text"
            placeholder="Search"
            ref={filterEl}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="py-4 pl-3 bg-gray-100 max-w-5xl mx-auto">
        <h1 className="text-steinNav text-xl pb-4 border-b-4 w-80 border-steinPink">
          Showing {visibleMembers} colleague(s)
        </h1>
      </div>

      {loading &&
        data
          .filter((val) => {
            return search == ""
              ? val
              : val.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((staffMember) => {
            return <Card staffMember={staffMember} />;
          })}
    </div>
  );
}

export default App;
