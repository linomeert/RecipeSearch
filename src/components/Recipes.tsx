import React from "react";
import Recipe from "./Recipe";

interface Ingredient {
  name: string;
  image: string;
}

interface RecipeItem {
  title: string;
  image: string;
  usedIngredients: Ingredient[];
  id: string;
}

interface RecipesProps {
  recipes: RecipeItem[];
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  // If recipes are empty, show a message
  if (Object.keys(recipes).length === 0) {
    return (
      <span className="message">Add some ingredients to find recipes!</span>
    );
  }

  return (
    <div className="container">
      <h2>Recipes</h2>
      <div className="found-recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
