import React from "react";
import Recipe from "./Recipe";

class Recipes extends React.Component {
  render() {
    const recipes = this.props.recipes;
    return (
      <div className="found-recipes">
        {Object.keys(recipes).map((key) => (
          <Recipe key={key} recipe={recipes[key]} />
        ))}
      </div>
    );
  }
}

export default Recipes;
