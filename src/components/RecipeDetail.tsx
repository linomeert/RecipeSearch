import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom"; // For routing and params
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensilSpoon,
  faStar,
  faLeaf,
  faLemon,
} from "@fortawesome/free-solid-svg-icons";
import { RecipeDetailType } from "../types/types";

const RecipeDetail: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetailType | null>(
    null
  );
  const { recipeId } = useParams<{ recipeId: string }>(); // Access the route parameter
  const navigate = useNavigate(); // useNavigate for navigation

  const getRecipeInfo = async (id: string) => {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const searchEndpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`;
    try {
      const response = await fetch(searchEndpoint);
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    if (recipeId) {
      getRecipeInfo(recipeId);
    }
  }, [recipeId]); // Fetch recipe when component mounts or recipeId changes

  if (!selectedRecipe || !selectedRecipe.extendedIngredients) {
    return null;
  }

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
  } = selectedRecipe;

  return (
    <div className="recipe-app detail">
      <Header />

      <div className="recipe-header">
        <button onClick={() => navigate("/")}>Go back</button>
        <br />
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
              <span>
                <FontAwesomeIcon icon={faUtensilSpoon} />
              </span>
              {servings} servings
            </li>
            {vegetarian && (
              <li>
                <span>
                  <FontAwesomeIcon icon={faLemon} />
                </span>
                Vegetarian
              </li>
            )}
            {vegan && (
              <li>
                <span>
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                Vegan
              </li>
            )}
            <li>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              {spoonacularScore}/100
            </li>
          </ul>
        </div>
        <div className="details">
          <img src={image} alt={title} />
          <h3>Ingredients:</h3>
          <ul className="detailed-ingredients">
            {extendedIngredients.map((ingredient) => (
              <li key={ingredient.name}>
                <p>
                  {ingredient.measures.metric.amount}
                  {ingredient.measures.metric.unitShort} of{" "}
                  <span className="strong">{ingredient.name}</span>
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
};

export default RecipeDetail;
