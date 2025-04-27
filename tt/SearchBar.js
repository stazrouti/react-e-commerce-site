import React, { useState } from 'react';

const SearchBar = () => {
  // State to store the search query entered by the user
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle the search query
  const handleSearch = async () => {
    try {
      // Send a search request to the back-end API
      const response = await fetch(`/api/search?query=${searchQuery}`);
      
      if (response.ok) {
        // If the response is successful, parse the JSON data
        const data = await response.json();
        
        // Display the search results
        console.log(data);
      } else {
        // Handle error response
        console.error('Search request failed');
      }
    } catch (error) {
      // Handle any network or API errors
      console.error('Search request failed:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;