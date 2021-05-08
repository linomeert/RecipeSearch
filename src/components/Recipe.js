import React from "react";

class Recipe extends React.Component {
  render() {
    const { title, image, usedIngredients } = this.props.recipe;
    return (
      <div className="card-product">
        <img src={image} />
        <div className="card-product-infos">
          <h2>{title}</h2>
          <ul className="ingredients-in-recipe">
            {Object.keys(usedIngredients).map((key) => (
              <li key={usedIngredients[key].name}>
                {usedIngredients[key].name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Recipe;
