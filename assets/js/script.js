const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

/**
 * Function to fetch recipes
 * via API.
 */
const fetchRecipes = async (query) => {                                                         // async function to allow await
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";                                 
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);  // await used to load full data before return
    const response = await data.json();                                                         // await used to load full data before return
    
    recipeContainer.innerHTML = "";

    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');                                        // create DEV element for holding menu items and asigning class "recipe" to it
        recipeDiv.classList.add('recipe');                                                      // strMealThumb = image stored in API
        recipeDiv.innerHTML =`
            <img src ="${meal.strMealThumb}">                                                   
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>This is a <span>${meal.strCategory}</span> recipe</p>                                          
        `
        
        const button = document.createElement('button');                                        // create button to view recipe (addEventListener to return recipe on 'click')
        button.textContent = "View Recipe";                                                     // Named button to View Recipe
        recipeDiv.appendChild(button);                                                          // assign button (View Recipe) as child element to recipe div class

        button.addEventListener('click', () => {                                                // adding event listener to view recipe button
            openRecipe(meal);
        });

        recipeContainer.appendChild(recipeDiv); 

        console.log(recipeDiv);
        
    });
};

/**
 * blocks recipe-details div 
 * by default until called. 
 */

const openRecipe = (meal) => {                                                                         
    recipeDetailsContent.innerHTML = `
        <h2>${meal.strMeal}</h2>
    `
    recipeDetailsContent.parentElement.style.display = 'block';
};

/**
 * Reads the input in the search field when search button is clicked to 
 * pass the input to fetchRecipes function.
 */
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();                                                 // trim() used to remove any whitesapce whithing the search inputfield
    fetchRecipes(searchInput);
});