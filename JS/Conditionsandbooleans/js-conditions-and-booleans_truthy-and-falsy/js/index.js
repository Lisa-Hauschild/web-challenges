// You don't have to touch this code.
// You can solve this exercise in the browser


function showAnswers() {
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      span.classList.toggle("hidden");
    });
  }
  const button = document.querySelector("[data-js='show-answers']");
  button.addEventListener("click", showAnswers);


  console.log(1>10);

  const questionInput = document.querySelector("[data-js='question']");


  const h1El = document.createElement("h1");
  h1El.textContent = "🦛🦛falsy!";
  h1El.style.color="black";
  questionInput.appendChild(h1El);


