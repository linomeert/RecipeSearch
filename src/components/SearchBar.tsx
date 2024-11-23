import React, { useState, useRef } from "react";
import SearchResult from "./SearchResult";

interface SearchResultType {
  name: string;
  [key: string]: any;
  image: string;
}

interface Ingredient {
  image: string;
  name: string;
}

interface SearchBarProps {
  addIngredient: (ingredient: Ingredient) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ addIngredient }) => {
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const queryRef = useRef<HTMLInputElement>(null);

  const searchIngredients = () => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const query = queryRef.current?.value;
    const searchEndpoint = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIKEY}&query=${query}&number=3`;

    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.dataset.item) {
      const item = JSON.parse(e.currentTarget.dataset.item);
      addIngredient(item);
      clearSearchResults();
      if (queryRef.current) queryRef.current.value = "";
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        data-item={searchResults.length ? JSON.stringify(searchResults[0]) : ""}
        ref={queryRef}
        onKeyDown={handleKeyDown}
        onChange={searchIngredients}
        className="search-ingredient"
        placeholder="Search ingredient"
      />
      <ul className="search-results">
        {searchResults.map((result) => (
          <SearchResult
            key={result.name}
            searchResult={result}
            addIngredient={addIngredient}
            clearSearchResults={clearSearchResults}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
