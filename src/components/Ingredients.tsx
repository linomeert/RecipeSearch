import React from "react";
import Ingredient from "./Ingredient";
import { IngredientType } from "../types/types";

interface IngredientsProps {
  ingredients: IngredientType[];
  removeIngredient: (ingredientName: string) => void;
}

const Ingredients: React.FC<IngredientsProps> = ({
  ingredients,
  removeIngredient,
}) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          ingredient={ingredient}
          removeIngredient={removeIngredient}
        />
      ))}
    </ul>
  );
};

export default Ingredients;
