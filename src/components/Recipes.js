import React from "react";

class Recipes extends React.Component {
  render() {
    const recipes = this.props.recipes;
    return (
      <ul>
        {Object.keys(recipes).map((key) => (
          <li key={recipes[key].title}>
            <span>{recipes[key].title}</span>
            <img src={recipes[key].image}></img>
          </li>
        ))}
      </ul>
    );
  }
}

export default Recipes;
