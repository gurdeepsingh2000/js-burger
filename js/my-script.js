var burger_price = 50; //PREZZO DI PARTENZA DELL'HAMBURGER
var price_calculator = document.getElementsByClassName('calculate-price-btn')[0]; //BOTTONE CALCOLA PREZZO FINALE
var final_price = document.getElementById('final-price')            //PREZZO FINALE
var discount_coupon = 'COUPON50'                //CODICE DEL COUPON DA INSERIRE

price_calculator.addEventListener('click' , function(){
    var add_ingredient = document.getElementsByClassName('check-priceup');  //CHECKBOX DEI INGREDIENTI EXTRA

    for(var x = 0; x < add_ingredient.length; x++){             //CONTROLLO SE LE CASELLE SONO STATE CLICCATE
        if(add_ingredient[x].checked){
            burger_price += parseInt(add_ingredient[x].value); //SE CLICCATE AGGIUNGO IL PREZZO DELL'INGREDIENTE CLICCATO A QUELLO FINALE
        }
    }
    final_price.innerHTML = burger_price;

    var codeDiscount = document.getElementById('discount-coupon');          //INPUT DEL CODICE COUPON
    if(codeDiscount.value === discount_coupon){                     // CONTROLLO SE IL VALORE INSERITO DALL'UTENTE E UGUALE AL CODICE COUPON DEL SISTEMA
        alert('Il coupon è stato correttamente validato')
        discounted_price = burger_price * 50 / 100;             // CALCOLO DEL PREZZO SCONTATO (50%)
        final_price.innerHTML ='Il prezzo finale è ' + discounted_price;
    }else if(codeDiscount.value.length > 0){
        alert('Attenzione hai inserito un codice coupon errato!')
    }
})