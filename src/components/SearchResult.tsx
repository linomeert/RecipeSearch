import React from "react";

interface SearchResultProps {
  searchResult: {
    name: string;
    image: string;
  };
  addIngredient: (ingredient: { name: string; image: string }) => void;
  clearSearchResults: () => void;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchResult,
  addIngredient,
  clearSearchResults,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    clearSearchResults();
    const itemData = e.currentTarget.dataset.item;
    if (itemData) {
      addIngredient(JSON.parse(itemData));
    }
  };

  const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
  const { name, image } = searchResult;
  return (
    <li data-item={JSON.stringify(searchResult)} onClick={handleClick}>
      <img className="ingredient-pic" src={imgUrl + image} alt={name}></img>
      <span>{name}</span>
    </li>
  );
};

export default SearchResult;
