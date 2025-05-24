export default function IngredientsList(props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredient-list" aria-live="polite">
        {props.list}
      </ul>
      {props.list.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get Recipe</button>
        </div>
      )}
    </section>
  );
}
