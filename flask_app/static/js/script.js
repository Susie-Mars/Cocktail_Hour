console.log("script attached successfully")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'XXX',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};


// FUNCTION TO SEARCH BY DRINK NAME
document.querySelector("#btn1").addEventListener("click", searchDrink)
function searchDrink(event) {
    const coResultsDiv = document.querySelector("#coResults")
    let val = document.querySelector('#coName').value
    fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=' + val, options)
        .then(response => response.json())
        .then(drinkData => {
            console.log(drinkData) 
            coResultsDiv.innerHTML = `
            <div class="drResults">
                ${drinkData.drinks[0].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[0].strDrinkThumb}">`}
                ${drinkData.drinks[0].strDrink == null ? "": `<a href=""> ${drinkData.drinks[0].strDrink}</a>`}
            </div>
            <div class="drResults">
                ${drinkData.drinks[1].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[1].strDrinkThumb}">`}
                ${drinkData.drinks[1].strDrink == null ? "": `<a href=""> ${drinkData.drinks[1].strDrink}</a>`}
            </div>
            <div class="drResults">
                ${drinkData.drinks[2].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[2].strDrinkThumb}">`}
                ${drinkData.drinks[2].strDrink == null ? "": `<a href=""> ${drinkData.drinks[2].strDrink}</a>`}
            </div>
`})
        .catch(err => console.log(err));
    event.preventDefault()
    console.log("Submitted")
}


// FUNCTION TO SEARCH DRINKS BY INGREDIENT
document.querySelector("#btn2").addEventListener("click", searchIng)
function searchIng(event) {
    const ingResultsDiv = document.querySelector("#ingResults")
    let val1 = document.querySelector('#coIngredient').value
    fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=' + val1, options)
        .then(response => response.json())
        .then(drinkData =>  {
            console.log(drinkData)
            ingResultsDiv.innerHTML = `
            <div class="drResults">
                ${drinkData.drinks[0].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[0].strDrinkThumb}">`}
                ${drinkData.drinks[0].strDrink == null ? "": `<a href=""> ${drinkData.drinks[0].strDrink}</a>`}
            </div>
            <div class="drResults">
                ${drinkData.drinks[1].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[1].strDrinkThumb}">`}
                ${drinkData.drinks[1].strDrink == null ? "": `<a href=""> ${drinkData.drinks[1].strDrink}</a>`}
            </div>
            <div class="drResults">
                ${drinkData.drinks[2].strDrinkThumb == null ? "": `<img class="drinkImgSearch" src="${drinkData.drinks[2].strDrinkThumb}">`}
                ${drinkData.drinks[2].strDrink == null ? "": `<a href=""> ${drinkData.drinks[2].strDrink}</a>`}
            </div>
`})
        .catch(err => console.log(err));
    event.preventDefault()
    console.log("YUUUUP")
}

// FUNCTION TO HIT A BUTTON TO BE SHOWN A RANDOM DRINK
document.querySelector("#buttonran").addEventListener("click", getRandom)
function getRandom(event) {
    const randResultsDiv = document.querySelector('#randResults')
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php', options)
        .then(response => response.json())
        .then(drinkData => {
            console.log(drinkData)
            randResultsDiv.innerHTML = `
            <h3> ${drinkData.drinks[0].strDrink}</h3>
            <div id="drinkInfo"> 
                <img id="drinkImg" src="${drinkData.drinks[0].strDrinkThumb}">
                <div id="ingredients">
                    <ul>
                        ${drinkData.drinks[0].strIngredient1 == null ? "": `<li> ${drinkData.drinks[0].strMeasure1} ${drinkData.drinks[0].strIngredient1}</li>`}
                        ${drinkData.drinks[0].strIngredient2 == null ? "": `<li> ${drinkData.drinks[0].strMeasure2} ${drinkData.drinks[0].strIngredient2}</li>`}
                        ${drinkData.drinks[0].strIngredient3 == null ? "": `<li> ${drinkData.drinks[0].strMeasure3} ${drinkData.drinks[0].strIngredient3}</li>`}
                        ${drinkData.drinks[0].strIngredient4 == null ? "": `<li> ${drinkData.drinks[0].strMeasure4} ${drinkData.drinks[0].strIngredient4}</li>`}
                        ${drinkData.drinks[0].strIngredient5 == null ? "": `<li> ${drinkData.drinks[0].strMeasure5} ${drinkData.drinks[0].strIngredient5}</li>`}
                        ${drinkData.drinks[0].strIngredient6 == null ? "": `<li> ${drinkData.drinks[0].strMeasure6} ${drinkData.drinks[0].strIngredient6}</li>`}
                        ${drinkData.drinks[0].strIngredient7 == null ? "": `<li> ${drinkData.drinks[0].strMeasure7} ${drinkData.drinks[0].strIngredient7}</li>`}
                        ${drinkData.drinks[0].strIngredient8 == null ? "": `<li> ${drinkData.drinks[0].strMeasure8} ${drinkData.drinks[0].strIngredient8}</li>`}
                        ${drinkData.drinks[0].strIngredient9 == null ? "": `<li> ${drinkData.drinks[0].strMeasure9} ${drinkData.drinks[0].strIngredient9}</li>`}
                        ${drinkData.drinks[0].strIngredient10 == null ? "": `<li> ${drinkData.drinks[0].strMeasure10} ${drinkData.drinks[0].strIngredient10}</li>`}
                        ${drinkData.drinks[0].strIngredient11 == null ? "": `<li> ${drinkData.drinks[0].strMeasure11} ${drinkData.drinks[0].strIngredient11}</li>`}
                        ${drinkData.drinks[0].strIngredient12 == null ? "": `<li> ${drinkData.drinks[0].strMeasure12} ${drinkData.drinks[0].strIngredient12}</li>`}
                        ${drinkData.drinks[0].strIngredient13 == null ? "": `<li> ${drinkData.drinks[0].strMeasure13} ${drinkData.drinks[0].strIngredient13}</li>`}
                        ${drinkData.drinks[0].strIngredient14 == null ? "": `<li> ${drinkData.drinks[0].strMeasure14} ${drinkData.drinks[0].strIngredient14}</li>`}
                        ${drinkData.drinks[0].strIngredient15 == null ? "": `<li> ${drinkData.drinks[0].strMeasure15} ${drinkData.drinks[0].strIngredient15}</li>`}
                    </ul>
                </div>
            </div>
            <p> ${drinkData.drinks[0].strInstructions}</p>
`})
        .catch(err => console.log(err))
}



