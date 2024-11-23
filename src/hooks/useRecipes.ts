import { useState, useEffect } from "react";
import { RecipeType } from "../types/types";

const useRecipes = (ingredients: string[]) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  const loadRecipes = async (ignorePantry: boolean) => {
    const ingredientsString = ingredients.join(",+");
    const NUMBER = 40;
    const APIKEY = process.env.REACT_APP_API_KEY;

    const searchEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${ingredientsString}&number=${NUMBER}&ignorePantry=${ignorePantry}`;
    try {
      const response = await fetch(searchEndpoint);
      if (!response.ok) throw new Error("Failed to fetch recipes.");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  return { recipes, loadRecipes };
};

export default useRecipes;
