import { useState } from "react";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        
        const newIngredient = e.target.ingredient.value.trim();
        if (newIngredient) {
            console.log('Ingredient added!');
            setIngredients( prev => [...prev, newIngredient])
            e.target.ingredient.value = "";
        }
    }

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    

    return(
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form'>
                <input 
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g. tomato"
                    name="ingredient"
                />
                <button >Add Ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}