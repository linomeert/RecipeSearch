import { useState, useEffect } from "react";
import { IngredientType } from "../types/types";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  const addIngredient = (ing: IngredientType) => {
    setIngredients((prevIngredients) => {
      if (prevIngredients.some((item) => item.name === ing.name)) {
        return prevIngredients;
      }
      return [...prevIngredients, ing];
    });
  };
  
  const removeIngredient = (ingredientName: string) => {
    setIngredients((prevIngredients) => {
      const updatedIngredients = prevIngredients.filter(
        (item) => item.name !== ingredientName
      );
      console.log("Updated Ingredients:", updatedIngredients);
      return updatedIngredients;
    });
  };
  
  useEffect(() => {
    const storedRecipes = localStorage.getItem("ingredients");
    if (storedRecipes) {
      setIngredients(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    if (ingredients.length > 0) {
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
    }
  }, [ingredients]);

  return { ingredients, setIngredients, addIngredient, removeIngredient};
};

export default useIngredients;
