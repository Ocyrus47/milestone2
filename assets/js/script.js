const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

/**
 * Function to fetch recipes
 * via API.
 */
const fetchRecipes = async (query) => {                                                        // async function to allow await
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`); // await used to load full data before return
    const response = await data.json();                                                         // await used to load full data before return
    
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');                                                      // strMealThumb = image stored in API
        recipeDiv.innerHTML =`
            <img src ="${meal.strMealThumb}">                                                    
        `
        recipeContainer.appendChild(recipeDiv); 
    });
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