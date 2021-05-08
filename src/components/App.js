import "../App.scss";
import React from "react";
import SearchBar from "./SearchBar";
import Recipes from "./Recipes";

import Ingredients from "./Ingredients";
import LoadRecipesButton from "./LoadRecipesButton";

class App extends React.Component {
  state = {
    ingredients: {},
    recipes: {},
  };

  addIngredient = (ing) => {
    const ingredients = { ...this.state.ingredients };
    ingredients[ing.name] = ing;
    this.setState({ ingredients });
  };

  removeIngredient = (e) => {
    const ingredients = { ...this.state.ingredients };
    delete ingredients[e.currentTarget.dataset.item];
    this.setState({ ingredients });
  };

  loadRecipes = () => {
    const APIKEY = "540815f48fa1457791cc375205109fa9";
    const recepiesString = Object.keys(this.state.ingredients).map(
      (key) => key
    );
    const formatString = recepiesString.join(",+");

    const searchEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${formatString}&number=10`;
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ recipes: data });
      });
  };

  getRecipeInfo = (id) => {
    const APIKEY = "540815f48fa1457791cc375205109fa9";
    const searchEndpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`;
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((selectedRecipe) => {
        this.setState({ selectedRecipe });
      });
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("ingredients");
    if (localStorageRef) {
      this.setState({ ingredients: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients));
  }

  render() {
    return (
      <div className="recipe-app">
        <div className="sidebar">
          <div className="container">
            <h2>Ingredients</h2>
            <SearchBar addIngredient={this.addIngredient} />
            <Ingredients
              ingredients={this.state.ingredients}
              removeIngredient={this.removeIngredient}
            />
            <LoadRecipesButton
              loadRecipes={this.loadRecipes}
              ingredients={this.state.ingredients}
            />
          </div>
        </div>
        <div className="main-content">
          <Recipes
            getRecipeInfo={this.getRecipeInfo}
            recipes={this.state.recipes}
          />
        </div>
      </div>
    );
  }
}

export default App;
