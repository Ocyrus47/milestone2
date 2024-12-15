const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');

/**
 * Function to fetch recipes
 * via API.
 */
const fetchRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    console.log(response);
};

/**
 * Reads the input in the search field when search button is clicked to 
 * pass the input to fetchRecipes function.
 */
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
});