import React from "react";
import Ingredient from "./Ingredient";

class Recipe extends React.Component {
  render() {
    const { title, image, usedIngredients } = this.props.recipe;
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="recipe-cart"
      >
        <div className="cart-content">
          <h4>{title}</h4>
          <div className="used-ingredients">
            {Object.keys(usedIngredients).map((key) => (
              <Ingredient
                key={usedIngredients[key].name}
                ingredient={usedIngredients[key]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
