document.addEventListener('click' , function(){
    
const input = document.getElementById('search');
const button = document.getElementById('btn');
const result = document.getElementById('dishes');
const mealDetailsContent = document.querySelector('.meal-details-content');


const getRecipes = async (dish) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${dish}`
    const response = await fetch(url);
    const data = await response.json()
    console.log(response);
    console.log(data)
    showRecipes(data);
}

const showRecipes = (data) =>{
    if (data.meals === null) {
          result.innerHTML = `<p>No dishes found with ${input.value} as an ingredient</p>`;
        } 
        else{
            data.meals.forEach((meal) => {
            result.innerHTML+= `<div class="recipe">
            <p><img id="pic" src="${meal.strMealThumb}"></p>
            <p><h2>${meal.strMeal}</h2></p>
            <p><a href="#" class="recipe-btn">Get Recipe</a></p>
            </div>
            `
           });
        }
    }



button.addEventListener('click', function(){
    let ingredient = input.value;
    getRecipes(ingredient)
})

})


//Yes, exactly! In the forEach loop, each item in the data.meals array is taken one at a time and assigned to the parameter meal. You can think of meal as a placeholder that represents the current item being processed in the loop.By using meal.strMeal, you access the strMeal property of the current meal object. Since meal represents an individual meal in each iteration of the loop, you can access its specific properties using dot notation (meal.propertyName). In this case, meal.strMeal retrieves the name of the meal for that iteration.So, the code within the forEach loop can access the properties of each meal object individually and use them to generate the desired HTML elements or perform any other desired operations.