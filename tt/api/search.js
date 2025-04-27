import React, { useState, useEffect } from "react";
import axios from "axios";

const FlexSearch = require("flexsearch");

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get("/api/search", {
      params: {
        query,
      },
    });

    setResults(response.data.results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>{result.title}</li>
      ))}
    </ul>
  );
};

const searchIndex = new FlexSearch({
  // Configure your search index settings here
});

const fetchAndIndexData = async () => {
  const response = await axios.get("/api/data");
  const data = response.data;
  data.forEach((item) => {
    searchIndex.add(item.id, item.content);
  });
};

useEffect(() => {
  fetchAndIndexData();
}, []);

const Search = () => {
  return (
    <>
      <SearchBar />
      <SearchResults results={searchIndex.search(query)} />
    </>
  );
};

export default Search;
