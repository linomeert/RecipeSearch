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
    favorites: {},
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
    const APIKEY = process.env.REACT_APP_API_KEY;
    const recepiesString = Object.keys(this.state.ingredients).map(
      (key) => key
    );
    const formatString = recepiesString.join(",+");
    const NUMBER = 40;

    const searchEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${formatString}&number=${NUMBER}`;
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ recipes: data });
      });
  };

  componentDidMount() {
    const localStorageIngredients = localStorage.getItem("ingredients");
    const localStorageRecipes = localStorage.getItem("recipes");

    if (localStorageIngredients) {
      this.setState({
        ingredients: JSON.parse(localStorageIngredients),
      });
    }
    if (localStorageRecipes) {
      this.setState({
        recipes: JSON.parse(localStorageRecipes),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients));
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  }

  render() {
    return (
      <div className="recipe-app">
        <div className="flex-container">
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
      </div>
    );
  }
}

export default App;
