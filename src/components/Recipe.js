import React from "react";

class Recipe extends React.Component {
  render() {
    const imgUrl = "https://spoonacular.com/cdn/ingredients_100x100/";
    console.log(this.props.ingredient.name);
    return (
    <div style={{ 
        backgroundImage: `url(${recipes[key].image})`,
        className="recipe-cart"
    }}>
        <div className="cart-content">
            <h3>{recipes[key].title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>

      
    );
  }
}

export default Recipe;
