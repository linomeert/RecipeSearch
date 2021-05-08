import React from "react";
import Recipe from "./Recipe";

class Recipes extends React.Component {
  render() {
    const recipes = this.props.recipes;
    if (Object.keys(recipes).length === 0) {
      <span className="message">Add some ingredients to find recipes!</span>;
    }
    return (
      <div className="container">
        <h2>Recipes</h2>
        <div className="found-recipes">
          {Object.keys(recipes).map((key) => (
            <Recipe
              getRecipeInfo={this.props.getRecipeInfo}
              key={key}
              recipe={recipes[key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Recipes;
