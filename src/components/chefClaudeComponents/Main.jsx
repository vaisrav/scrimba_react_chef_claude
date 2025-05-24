import { useState } from "react";

import IngredientsForm from "./IngredientsForm";
import ingredientList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

    function getRecipe() {
    setRecipeShown((prev) => !prev);
    }

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

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <main>
      <IngredientsForm action={addIngredient} />
      {ingredientListItems.length > 0 && (
        <ingredientList 
        list={ingredientListItems}
        getRecipe={getRecipe}/>
      )}
      {recipeShown && <ClaudeRecipe/>}
    </main>
  );
}
