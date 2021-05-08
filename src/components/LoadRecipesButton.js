import React from "react";

class LoadRecipesButton extends React.Component {
  render() {
    if (Object.keys(this.props.ingredients).length === 0) {
      return null;
    }
    return (
      <button onClick={() => this.props.loadRecipes()}>Load Recepies</button>
    );
  }
}

export default LoadRecipesButton;
