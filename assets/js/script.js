const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close');

/**
 * Function to fetch recipes
 * via API.
 */
const fetchRecipes = async (query) => {                                                         // async function to allow await
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";   
    try {                             
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);  // await used to load full data before return
        const response = await data.json();                                                         // await used to load full data before return

        recipeContainer.innerHTML = "";

        response.meals.forEach(meal => {
const recipeDiv = document.createElement('div');                                        // create DEV element for holding menu items and asigning class "recipe" to it
recipeDiv.classList.add('recipe');                                                      // strMealThumb = image stored in API
recipeDiv.innerHTML =`
<img src = "${meal.strMealThumb}" alt = "image of dish" width="300" height="300">                                                   
<h1>${meal.strMeal}</h1>
<p><span>${meal.strArea}</span> Dish</p>
<p>This is a <span>${meal.strCategory}</span> recipe</p>                                          
`;

const button = document.createElement('button');                                        // create button to view recipe (addEventListener to return recipe on 'click')
button.textContent = "View Recipe";                                                     // Named button to View Recipe
recipeDiv.appendChild(button);                                                          // assign button (View Recipe) as child element to recipe div class

button.addEventListener('click', () => {                                                // adding event listener to view recipe button
openRecipe(meal);
});

recipeContainer.appendChild(recipeDiv); 

        });
    } catch (error) {
        recipeContainer.innerHTML = "<h2>Invalid input! Please input correct recipe. Thank you</h2>";
        alert('Error in fetching Recipes...');
    } 
};

/**
 * function to fetch ingredients and measurements
 * for recipe
 */
const fetchIngredients = (meal) => {
    let ingredientsList = "";
    for (let i = 1; i <= 20; i++) {                                                              // starting loop from 1 and looping to 20 as inspected in variables in API.
        const ingredient = meal[`strIngredient${i}`];                                            // strIngredient variable for ingerigents and strMeasure for Measurements
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        } else {
            break;
        }
    }
    return ingredientsList;
};

/**
 * Blocks recipe-details div 
 * by default until called. 
 * gets indredients from fetchIngredients function
 * and measurements from strInstructions variable in API
 */
const openRecipe = (meal) => {                                                                         
    recipeDetailsContent.innerHTML = `
        <h2 class = "recipeName">${meal.strMeal}</h2>
        <h3>Ingredients: </h3>
        <ul class = "ingredientList">${fetchIngredients(meal)}</ul>
        <br>
        <div class = "recipeInstructions">
            <h3>Instructions: </h3>
            <p>${meal.strInstructions}</p>
        </div>                                                         
    `;
    recipeDetailsContent.parentElement.style.display = 'block';
};

//Close button fuction for recipe details pop up
recipeCloseBtn.addEventListener('click', () => {
    recipeDetailsContent.parentElement.style = 'none';
})

searchBtn.addEventListener('click', (e) => {

});


/**
 * Reads the input in the search field when search button is clicked to pass the input to fetchRecipes function.
 * Prompt use for input!
 */
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();                                                 // trim() used to remove any whitesapce whithing the search inputfield
    if (!searchInput) {
        alert('Please input your search!');
        recipeContainer.innerHTML = `<h2>Please type the recipe you want to seach to begin. Thank you!</h2>`;
        return;
    }
    fetchRecipes(searchInput);
});