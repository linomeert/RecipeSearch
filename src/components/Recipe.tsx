import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { IngredientType } from "../types/types";

interface RecipeProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    usedIngredients: IngredientType[];
  };
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const recipeId = (e.currentTarget as HTMLElement).dataset.id;

    navigate(`/recipes/${recipeId}`);
  };

  const { title, image, usedIngredients, id } = recipe;

  return (
    <div className="card-product">
      <a href="" onClick={handleClick} className="go-to-recipe" data-id={id}>
        <span>
          <FontAwesomeIcon icon={faSearchPlus} />
        </span>
        <img src={image} alt={title} />
      </a>
      <div className="card-product-infos">
        <h2>{title}</h2>
        <ul className="recipe-ingredients">
          {usedIngredients.map((ingredient) => (
            <li key={ingredient.name}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
