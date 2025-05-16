import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingres, setIngres] = React.useState([]);
  const [recipeShowm, setRecipeShown] = React.useState(false);
  const ingredientListitems = ingres.map((ing) => <li key={ing}>{ing}</li>);

  function addIng(formData) {
    const newIngredient = formData.get("ingredient");
    setIngres([...ingres, newIngredient]);
    // console.log(ingres);
  }

  function toggleRecipeShown() {
    setRecipeShown((prevres) => !prevres);
  }
  return (
    <main className="main">
      <form action={addIng}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>
    <IngredientsList toggleRecipeShown = {toggleRecipeShown} ingredientListitem = {ingredientListitems} ingres={ingres}/>

      {recipeShowm && <Recipe />}
    </main>
  );
}
