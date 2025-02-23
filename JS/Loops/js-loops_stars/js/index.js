console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');


function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  for(let count = 0; count<5; count++) {}

const createStar = document.createElement("svg");
createStar.setAttribute("npx",)




}

  // --v-- write or modify code below this line --v--

  // --^-- write or modify code above this line --^--
}







### Part 1: Render Stars

Start by displaying 5 empty stars in the `starContainer`. In `./js/index.js`, define a function `renderStars`:

- Use a `for` loop inside the function to create 5 stars.
  💡 _Start the loop with a value of 1 instead of 0._
- Inside the loop, create an `img` element, setting its `src` attribute to the path of the empty star image (`assets/star-empty.svg`).
- Append each star to `starContainer`.
