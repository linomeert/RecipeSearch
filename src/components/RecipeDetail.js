import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

class RecipeDetail extends React.Component {
  state = {
    selectedRecipe: {},
  };

  getRecipeInfo = (id) => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const searchEndpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`;
    fetch(searchEndpoint)
      .then((response) => response.json())
      .then((selectedRecipe) => {
        this.setState({ selectedRecipe });
      });
  };

  componentDidMount() {
    this.getRecipeInfo(this.props.match.params.recipeId);
  }

  render() {
    const {
      title,
      summary,
      image,
      readyInMinutes,
      servings,
      spoonacularScore,
      vegetarian,
      vegan,
      extendedIngredients,
      instructions,
    } = this.state.selectedRecipe;

    if (
      this.state.selectedRecipe === undefined ||
      extendedIngredients === undefined
    ) {
      return null;
    }

    return (
      <div className="recipe-app detail">
        <div className="recipe-header">
          <button onClick={() => this.props.history.push("/")}>Go back</button>
          <br></br>
        </div>
        <div className="recipe-intro">
          <div className="sidebar-detail">
            <ul className="info">
              <li>
                <span>
                  <FontAwesomeIcon icon={faClock} />
                </span>
                Ready in {readyInMinutes} minutes
              </li>
              <li>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faUtensilSpoon} />
                </span>
                {servings} servings
              </li>
              {vegetarian ? (
                <li>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLemon} />
                  </span>
                  Vegetarian
                </li>
              ) : (
                ""
              )}
              {vegan ? (
                <li>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLeaf} />
                  </span>
                  vegan
                </li>
              ) : (
                ""
              )}
              <li>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                {spoonacularScore}/100
              </li>
            </ul>
          </div>
          <div className="details">
            <img src={image}></img>
            <h3>Ingredients:</h3>
            <ul className="detailed-ingredients">
              {Object.keys(extendedIngredients).map((key) => (
                <li key={extendedIngredients[key].name}>
                  <p>
                    {extendedIngredients[key].measures.metric.amount}
                    {extendedIngredients[key].measures.metric.unitShort} of{" "}
                    <span className="strong ">
                      {extendedIngredients[key].name}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="desc">
            <h2>{title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            ></p>
            <span className="instructions">
              <h3>Instructions</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: instructions,
                }}
              ></p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;
