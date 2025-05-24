import { useState } from "react";

import IngredientForm from "./IngredientForm";
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
      <IngredientForm action={addIngredient} />
      {ingredientListItems.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredient-list" aria-live="polite">
            {ingredientListItems}
          </ul>
          {ingredientListItems.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRecipe}>Get Recipe</button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <ClaudeRecipe/>
      )}
    </main>
  );
}
