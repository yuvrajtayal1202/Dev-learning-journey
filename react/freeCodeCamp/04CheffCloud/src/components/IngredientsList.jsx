import React from 'react'

const IngredientsList = ({ingres, ingredientListitem, toggleRecipeShown}) => {
  return (
<>
<section>
        {ingres.length > 0 ? <h2>Ingredients on hand:</h2> : null}
        <ul className="indgredients-list">{ingredientListitem}</ul>
        {ingres.length >= 3 ? (
          <div className="recipe-cont">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={toggleRecipeShown}>Get a recipe</button>
          </div>
        ) : null}
      </section>
</>
  )
}

export default IngredientsList
