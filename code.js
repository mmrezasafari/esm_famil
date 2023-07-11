const btn = document.getElementById('submit-btn')
const food = [];
const country = [];
const color = [];
const firstChar = ''

btn.addEventListener('click', () => {
    let score = 0;
    const colorInput = document.getElementById('input-color')
    const countryInput = document.getElementById('input-country')
    const foodInput = document.getElementById('input-food')

//     color.push(colorInput);
//     food.push(foodInput)
    // country.push(foodInput)
    if(colorInput[0] === firstChar ) {
        if(food.includes(foodInput)) {
            score += 5
        } else {
            score += 10
        }
    }

    if(colorInput[0] === firstChar) {
        if(color.includes(colorInput)) {
            score += 5
        } else {
            score += 10
        }
    }

    if(countryInput[0] === firstChar) {
        if(country.includes(countryInput)) {
            score += 5
        } else {
            score += 10
        }
    }



})