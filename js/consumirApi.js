//consumir api de pagina gratuita https://www.themealdb.com/ ((problema no siempre online))
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3>No se encontro esa receta intenta de nuevo</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        console.log(ingredients);

        result.innerHTML = `
        <div class="caracteristicas"><h2>${myMeal.strMeal}</h2></div>
        <img class="imagenReceta" src=${myMeal.strMealThumb}>
        <div class="caracteristicas"><h4>Origen&nbsp ${myMeal.strArea}</h4></div>
        <div id="ingredientes"><h3 class="caracteristicas">Ingredientes </h3></div>
        <div id="ingredientes"><h3 class="caracteristicas">Preparacion </h3></div>
        <div id="recipe"><p id="instructions">${myMeal.strInstructions}</div>
       `;
        let ingredientCon = document.getElementById("ingredientes");
        let parent = document.createElement("ul");
        let recipe = document.getElementById("recipe");
 
        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3>No hay resultados</h3>`;
      });
  }
});
