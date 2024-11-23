import "../App.scss";
import React from "react";
import SearchBar from "./SearchBar";
import Recipes from "./Recipes";
import Header from "./Header";
import Ingredients from "./Ingredients";
import LoadRecipesButton from "./LoadRecipesButton";
import useIngredients from "../hooks/useIngredients";
import useRecipes from "../hooks/useRecipes";

const App: React.FC = () => {
  const { ingredients, addIngredient, removeIngredient } = useIngredients();
  const { recipes, loadRecipes } = useRecipes(
    ingredients.map((ing) => ing.name)
  );

  return (
    <div className="recipe-app">
      <Header />
      <div className="flex-container">
        <div className="sidebar">
          <div className="container">
            <h2>Ingredients</h2>
            <SearchBar addIngredient={addIngredient} />
            <Ingredients
              ingredients={ingredients}
              removeIngredient={removeIngredient}
            />
            <LoadRecipesButton
              loadRecipes={loadRecipes}
              ingredients={ingredients}
            />
          </div>
        </div>
        <div className="main-content">
          <Recipes recipes={recipes} />
        </div>
      </div>
    </div>
  );
};

export default App;
