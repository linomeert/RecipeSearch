import React, { useState, useRef } from "react";
import { IngredientType } from "../types/types";

interface LoadRecipesButtonProps {
  ingredients: IngredientType[];
  loadRecipes: (ignorePantry: boolean) => void;
}

const LoadRecipesButton: React.FC<LoadRecipesButtonProps> = ({
  ingredients,
  loadRecipes,
}) => {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const ignorePantryRef = useRef<HTMLInputElement>(null);

  const toggleCheckboxValue = () => {
    setCheckboxValue((prevValue) => !prevValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ignorePantryRef.current) {
      loadRecipes(ignorePantryRef.current.checked);
    }
  };

  if (ingredients.length === 0) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="check">
        <input
          name="ignorePantry"
          ref={ignorePantryRef}
          type="checkbox"
          checked={checkboxValue}
          onChange={toggleCheckboxValue}
        />
        <label htmlFor="ignorePantry">
          {" "}
          Ignore typical pantry items, such as water, salt, flour, etc.
        </label>
      </div>
      <button type="submit">Load Recipes</button>
    </form>
  );
};

export default LoadRecipesButton;
