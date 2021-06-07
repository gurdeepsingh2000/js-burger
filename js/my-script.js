var burger_price = 50;
var price_calculator = document.getElementsByClassName('calculate-price-btn')[0];
var final_price = document.getElementById('final-price')

price_calculator.addEventListener('click' , function(){
    var add_ingredient = document.getElementsByClassName('check-priceup');

    for(var x = 0; x < add_ingredient.length; x++){
        if(add_ingredient[x].checked){
            burger_price += parseInt(add_ingredient[x].value);
        }
    }
    final_price.innerHtml = burger_price
})