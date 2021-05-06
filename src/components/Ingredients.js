import React from "react";
import Ingredient from "./Ingredient";

class Ingredients extends React.Component {
  render() {
    const ingredients = this.props.ingredients;

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
