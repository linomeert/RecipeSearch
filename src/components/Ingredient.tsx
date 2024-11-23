import React from "react";

interface IngredientProps {
  ingredient: {
    name: string;
    image: string;
  };
  removeIngredient: (ingredientName: string) => void;
}

const Ingredient: React.FC<IngredientProps> = ({
  ingredient,
  removeIngredient,
}) => {
  const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";

  return (
    <li className="ingredient">
      <img
        className="ingredient-pic"
        src={imgUrl + ingredient.image}
        alt={ingredient.name} // Added alt attribute for accessibility
      />
      <span>{ingredient.name}</span>
      <span
        className="Remove"
        onClick={() => removeIngredient(ingredient.name)}
        data-item={ingredient.name}
      >
        -
      </span>
    </li>
  );
};

export default Ingredient;
