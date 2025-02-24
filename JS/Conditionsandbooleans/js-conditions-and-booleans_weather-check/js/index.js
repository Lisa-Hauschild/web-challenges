// Change this value to test different "weather" conditions.
const weather = "rainy"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 


switch (weather) {
    case "sunny":
        console.log("sunny");
        const h1El = document.createElement("h1");
        h1El.textContent="☀";
        h1El.style.color="black";
        document.body.appendChild(h1El);
        break;
    case "rainy":
        console.log("sunny");
    const rainy = document.createElement("h1");
    h1El.textContent="🌧️ + ☂️!";
        break;

    case "snowy":
        console.log("sunny");
    const rainy = document.createElement("h1");
    h1El.textContent= "It's snowing, stay warm!";
        break;

    default:
    h1El.textContent = "I'm not sure what the weather is like.";
    break; }

    console.log("Which is your favorite season of the year?");
const userAnswer = "spring";

switch (userAnswer) {
  case "summer":
    console.log("Heat, sun and waves for you 😎");
    break;
  case "autumn":
    console.log("Crunchy, colorful leaves and cool breezes 🍁");
    break;
  case "winter":
    console.log("Ice, snow, warm clothes and hot drinks ☕️");
    break;
  case "spring":
    console.log("Growth, green, and new beginnings! 🌿");
    break;
  default:
    console.log("Sorry, I don't think that's a season!");
}

## Part 2: Adding Conditions

- Now we’ll extend the `switch` statement by adding a second variable `temperature`, which contains a `number` (the current temperature in degrees Celsius).
- Modify the `switch` statement so that it also takes into account the `temperature`, and logs different messages based on the `weather` and the `temperature`.
  - New Conditions:
  - If the weather is "sunny" and the temperature is above 20°C → "It's sunny and warm!"
  - If the weather is "sunny" and the temperature is 20°C or below → "It's sunny, but a bit chilly!"
  - If the weather is "rainy" → "It's raining, don't forget your umbrella!"
  - If the weather is "snowy" and the temperature is below 0°C → "Freezing snow!"
  - For any other input → "I'm not sure what the weather is like."

> 💡 Tip: Use the `break` statement to avoid the "fall-through" effect.