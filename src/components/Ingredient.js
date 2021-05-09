import React from "react";

class Ingredient extends React.Component {
  render() {
    const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
    console.log("render ingredient");
    if (this.props.ingredient) {
      return (
        <li className="ingredient">
          <img
            className="ingredient-pic"
            src={imgUrl + this.props.ingredient.image}
          ></img>
          <span>{this.props.ingredient.name}</span>
          <span
            className="Remove"
            onClick={this.props.removeIngredient}
            data-item={this.props.ingredient.name}
          >
            -
          </span>
        </li>
      );
    }
  }
}

export default Ingredient;
