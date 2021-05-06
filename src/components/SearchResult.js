import PropTypes from "prop-types";
import React from "react";

class SearchResult extends React.Component {
  handleClick = (e) => {
    this.props.addIngredient(JSON.parse(e.currentTarget.dataset.item));
  };
  render() {
    const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
    return (
      <li
        data-item={JSON.stringify(this.props.searchResult)}
        onClick={this.handleClick}
      >
        <img
          src={imgUrl + this.props.searchResult.image}
          alt={this.props.searchResult.name}
        ></img>
        <span>{this.props.searchResult.name}</span>
      </li>
    );
  }
}

SearchResult.propTypes = {
  searchResult: PropTypes.object,
  addIngredient: PropTypes.func,
};

export default SearchResult;
