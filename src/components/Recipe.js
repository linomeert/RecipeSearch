import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

class Recipe extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/recipes/${e.currentTarget.dataset.id}`);
  };

  render() {
    const { title, image, usedIngredients, id } = this.props.recipe;
    return (
      <div className="card-product">
        <a
          href=""
          onClick={this.handleClick}
          className="go-to-recipe"
          data-id={id}
        >
          <span>
            <FontAwesomeIcon icon={faSearchPlus} />
          </span>
          <img src={image} />
        </a>
        <div className="card-product-infos">
          <h2>{title}</h2>
          <ul className="recipe-ingredients">
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

export default withRouter(Recipe);
