import React from "react";
import Ingredient from "./Ingredient";

class Ingredients extends React.Component {
  render() {
    const ingredients = this.props.ingredients;
    if (Object.keys(ingredients).length === 0) {
      return (
        <span className="message">Add some ingredients to find recipes!</span>
      );
    }
    return (
      <ul className="selected-ingredients">
        {Object.keys(ingredients).map((key) =>
          this.props.ingredients[key] ? (
            <Ingredient
              key={ingredients[key].name}
              ingredient={ingredients[key]}
              removeIngredient={this.props.removeIngredient}
            />
          ) : (
            ""
          )
        )}
      </ul>
    );
  }
}

export default Ingredients;
