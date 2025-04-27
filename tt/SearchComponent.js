// SearchComponent.js
import { useState } from 'react';

const SearchComponent = ({ index }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = index.search(query);
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;


/* // components/SearchComponent.js
import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    const query = searchQuery.toLowerCase();
    const content = getAllFilesFrontMatter();
    const results = content
      .filter((page) => page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query))
      .map((page) => ({
        ...page,
        highlightedTitle: highlightSearchTerms(page.title, query),
        highlightedContent: highlightSearchTerms(page.content, query),
      }));

    setSearchResults(results);
  };

  const highlightSearchTerms = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, (match, p1) => `<span class="highlight">${p1}</span>`);
  };

  const redirectToPage = (selectedPage) => {
    router.push(selectedPage.link);
  };

  return (
    <div>
      <div className='flex pl-20 pr-20 mt-10'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className='w-50'
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.map((result) => (
          <div key={result.title} className="search-result">
            <a className='line-clamp-1' href={result.link} onClick={() => redirectToPage(result)}>
              <span dangerouslySetInnerHTML={{ __html: result.highlightedTitle }} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export function getAllFilesFrontMatter() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const fileNames = fs.readdirSync(pagesDirectory);

  const allContent = fileNames
    .filter((fileName) => fileName.endsWith('.js'))
    .map((fileName) => {
      const fullPath = path.join(pagesDirectory, fileName);
      const module = require(fullPath); // Use require for .js files
      const { title, content } = module.default || {}; // Extract relevant data

      return {
        title,
        link: `/${fileName.replace(/\.js?$/, '')}`,
        content,
      };
    });

  return allContent;
}

export default SearchComponent; */


/* // SearchComponent.js
import React, { useState } from 'react';


const SearchComponent = ({ content }) => {
  const [searchQuery, setSearchQuery] = useState('about');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = content
      .filter(page => page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query))
      .map(page => ({
        ...page,
        highlightedTitle: highlightSearchTerms(page.title, query),
        highlightedContent: highlightSearchTerms(page.content, query),
      }));

    setSearchResults(results);
    console.log(results);
  };

  const highlightSearchTerms = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, (match, p1) => `<span class="highlight " >${p1}</span>`);
  };

  const redirectToPage = (selectedPage) => {
    // Replace with logic to navigate to the page containing the selected word
    console.log(`Navigating to page with link: ${selectedPage.link}`);
  };

  return (
    <div>
        <div className='flex pl-20 pr-20 mt-10'>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className='w-50'
            />
            <button onClick={handleSearch}>Search</button>
            
      </div>
      <div>
      {searchResults.map((result) => (
          <div key={result.title} className="search-result">
            <a className='line-clamp-1' href={result.link} onClick={() => redirectToPage(result)}>
              <span dangerouslySetInnerHTML={{ __html: result.highlightedTitle }} />
            </a>
            <p className='line-clamp-3' dangerouslySetInnerHTML={{ __html: result.highlightedContent }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
 */