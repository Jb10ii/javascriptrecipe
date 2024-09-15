
let recipes = [];
function addRecipe(title, ingredients, instructions) {
    let recipe = {
        title: title,
        ingredients: ingredients,
        instructions: instructions
    };
    recipes.push(recipe); 
    console.log("Recipe added: " + title);
}


function viewAllRecipes() {
    if (recipes.length === 0) {
        console.log("No recipes available.");
    } else {
        for (let i = 0; i < recipes.length; i++) {
            console.log("Title: " + recipes[i].title);
            console.log("Ingredients: " + recipes[i].ingredients);
            console.log("Instructions: " + recipes[i].instructions);
        }
    }
}


addRecipe("Pasta", ["pasta", "tomato sauce"], "Boil the pasta, add sauce.");
addRecipe("Salad", ["lettuce", "tomatoes", "cucumbers"], "Chop and mix vegetables.");


viewAllRecipes();