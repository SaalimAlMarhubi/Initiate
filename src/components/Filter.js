import { useState } from "react";
import React from "react";

function Filter() {
  const [query, setQuery] = useState("");

  return (
    <div className="py-4 pl-3 bg-white mx-auto w-full">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-steinNav text-2xl pb-3">Filter colleagues</h1>
        <input
          className="w-80 lg:w-96 h-14 rounded border-2 border-steinTeal p-2"
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
