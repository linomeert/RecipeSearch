import PropTypes from "prop-types";
import React from "react";
import SearchResult from "./SearchResult";

class SearchBar extends React.Component {
  state = {
    searchResults: {},
  };

  constructor(props) {
    super(props);
    this.queryRef = React.createRef();
  }

  searchIngredients = () => {
    const APIKEY = "540815f48fa1457791cc375205109fa9";
    const query = this.queryRef.current.value;
    const searchEndpoint = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${APIKEY}&query=${query}&number=3`;
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ searchResults: data });
      });
  };

  clearSearchResults = () => {
    const searchResults = {};
    this.setState({ searchResults });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter" && e.currentTarget.dataset.item) {
      this.props.addIngredient(JSON.parse(e.currentTarget.dataset.item));
      e.currentTarget.value = "";
      this.clearSearchResults();
    }
  };

  render() {
    const searchResults = this.state.searchResults;
    const first = searchResults.length
      ? JSON.stringify(searchResults[Object.keys(searchResults)[0]])
      : "";
    return (
      <div className="search">
        <input
          type="text"
          data-item={first}
          ref={this.queryRef}
          onKeyDown={this.handleKeyDown}
          onChange={this.searchIngredients}
          className="search-ingredient"
          placeholder="Search ingredient"
        ></input>
        <ul className="search-results">
          {Object.keys(searchResults).map((key) => (
            <SearchResult
              key={searchResults[key].name}
              searchResult={searchResults[key]}
              addIngredient={this.props.addIngredient}
            />
          ))}
        </ul>
      </div>
    );
  }
}

SearchBar.propTypes = {
  addIngredient: PropTypes.func,
};

export default SearchBar;
