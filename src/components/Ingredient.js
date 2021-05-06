import React from "react";

class Ingredient extends React.Component {
  render() {
    const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
    console.log(this.props.ingredient.name);
    return (
      <li>
        <span>{this.props.ingredient.name}</span>
        <img src={imgUrl + this.props.ingredient.image}></img>
        <span data-key={this.props.ingredient.name} className="remove">
          -
        </span>
      </li>
    );
  }
}

export default Ingredient;
