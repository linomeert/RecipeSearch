import "./App.scss";
import React from "react";
import SearchBar from "./components/SearchBar";
import Recipes from "./components/Recipes";
import Ingredients from "./components/Ingredients";

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

  componentDidMount() {
    const localStorageRef = localStorage.getItem("ingredients");
    if (localStorageRef) {
      this.setState({ ingredients: JSON.parse(localStorageRef) });
    }
  };

  componentDidUpdate() {
    localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients));
  };

  render() {
    return (
      <div className="recipe-app">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <SearchBar addIngredient={this.addIngredient} />
          <Ingredients />
        </div>
        <div className="recipes">
          <h2>Recipes</h2>
          <Recipes />
        </div>
      </div>
    );
  }
}

export default App;
