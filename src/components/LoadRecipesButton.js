import React from "react";

class LoadRecipesButton extends React.Component {
  state = {
    checkboxValue: false,
  };
  constructor(props) {
    super(props);
    this.ignorePantryRef = React.createRef();
  }

  toggleCheckboxValue = () => {
    this.setState({ checkboxValue: !this.state.checkboxValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loadRecipes(this.ignorePantryRef.current.value);
  };

  render() {
    if (Object.keys(this.props.ingredients).length === 0) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="check">
          <input
            name="ignorePantry"
            ref={this.ignorePantryRef}
            type="checkbox"
            placeholder="ignorePantry"
            value={this.state.checkboxValue}
            onChange={this.toggleCheckboxValue}
          ></input>
          <label htmlFor="ignorePantry">
            {" "}
            ignore typical pantry items, such as water, salt, flour, etc.
          </label>
        </div>
        <button type="submit">Load Recepies</button>
      </form>
    );
  }
}

export default LoadRecipesButton;
