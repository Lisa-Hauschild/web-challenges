console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}


hideTosError();


form.addEventListener("submit", (event) => {
  event.preventDefault();

   if (tosCheckbox.checked) {
   
    hideTosError();
    return;
  
  } else {
    
    showTosError();

 
    alert("Form submitted");

  }
  });

  


  // --v-- write your code here --v--

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  
  
  
