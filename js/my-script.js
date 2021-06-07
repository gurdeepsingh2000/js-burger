var burger_price = 50;
var add_ingredient = document.getElementsByClassName('check-priceup')[0];


add_ingredient.addEventListener('click', function () {
    for(var x = 0; x < add_ingredient.length ; x++){
        if(add_ingredient[x].checked){
            console.log(add_ingredient + burger_price)
        }
    }
})
