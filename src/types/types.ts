export interface IngredientType {
    name: string;
    image: string;
}

export interface RecipeType {
    id: string;
    title: string;
    image: string;
    usedIngredients: IngredientType[];
}
  
export interface IngredientDetailType {
    name: string;
    measures: {
        metric: {
        amount: number;
        unitShort: string;
        };
    };
}
  
export interface RecipeDetailType {
    title: string;
    summary: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    spoonacularScore: number;
    vegetarian: boolean;
    vegan: boolean;
    extendedIngredients: IngredientDetailType[];
    instructions: string;
}
