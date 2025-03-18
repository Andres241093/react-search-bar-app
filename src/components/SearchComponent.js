import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          onSearch(data.items);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar repos en GitHub..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchComponent;
