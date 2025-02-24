console.clear();


const InputElement = document.querySelector('[data-js="first-input"]');

const  ButtonElement = document.querySelector('[data-js="button-uppercase"]');

ButtonElement .addEventListener ('click', () => {
    
InputElement.value = InputElement.value.toUpperCase();
});


    

//single quotation, square brackets data-js doublequotes ('[data-js="button-uppercase"]');
