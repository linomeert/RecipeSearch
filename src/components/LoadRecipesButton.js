import React from "react";

class LoadRecipesButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.loadRecipes()}>Load Recepies</button>
    );
  }
}

export default LoadRecipesButton;
