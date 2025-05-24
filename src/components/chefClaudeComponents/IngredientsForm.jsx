function IngredientsForm(props) {
  return (
    <form action={props.action} className="add-ingredient-form">
      <input
        aria-label="Add ingredient"
        type="text"
        placeholder="e.g. tomato"
        name="ingredient"
      />
      <button>Add Ingredient</button>
    </form>
  );
}

export default IngredientsForm;
