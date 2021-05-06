import "./App.scss";
import React from "react";
import SearchBar from "./components/SearchBar";
import Recipes from "./components/Recipes";
import Ingredients from "./components/Ingredients";
import LoadRecipesButton from "./components/LoadRecipesButton";

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
    ingredients[e.currentTarget.dataset.item] = null;
    console.log(ingredients);
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
        <div className="ingredients">
          <div className="container">
            <h2>Ingredients</h2>
            <SearchBar addIngredient={this.addIngredient} />
            <Ingredients
              ingredients={this.state.ingredients}
              removeIngredient={this.removeIngredient}
            />
            <LoadRecipesButton loadRecipes={this.loadRecipes} />
          </div>
        </div>
        <div className="recipes">
          <div className="container">
            <h2>Recipes</h2>
            <Recipes recipes={this.state.recipes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
