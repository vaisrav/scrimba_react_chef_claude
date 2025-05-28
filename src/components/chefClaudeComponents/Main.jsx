import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import IngredientsForm from "./IngredientsForm";
import IngredientsList from "./IngredientsList";
// import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../../hfApi";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeText, setRecipeText] = useState("");

  function addIngredient(formData) {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient) {
      console.log("Ingredient added!");
      setIngredients((prev) => [...prev, newIngredient]);
      // e.target.ingredient.value = "";
    }
  }

  async function getRecipe() {
    if (ingredients.length === 0) return;
    const result = await getRecipeFromMistral(ingredients);
    setRecipeText(result);
    setRecipeShown((prev) => !prev);
  }

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <main>
      <IngredientsForm action={addIngredient} />
      {ingredientListItems.length > 0 && (
        <IngredientsList 
        list={ingredientListItems} 
        getRecipe={getRecipe} />
      )}
      {recipeShown && (
        <ReactMarkdown>
          {recipeText || "No recipe found. Please try again."}
        </ReactMarkdown>
      )}
    </main>
  );
}
