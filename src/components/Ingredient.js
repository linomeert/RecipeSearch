import React from "react";

class Ingredient extends React.Component {
  render() {
    const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
    console.log(this.props.ingredient.name);
    return (
      <li className="ingredient">
        <img
          className="ingredient-pic"
          src={imgUrl + this.props.ingredient.image}
        ></img>
        <span>{this.props.ingredient.name}</span>
      </li>
    );
  }
}

export default Ingredient;
