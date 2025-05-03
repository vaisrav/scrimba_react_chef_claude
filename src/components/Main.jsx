export default function Main() {
    return(
        <main>
            <form className='add-ingredient-form'>
                <input 
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g. tomato"
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}