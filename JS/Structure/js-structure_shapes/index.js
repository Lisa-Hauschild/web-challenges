console.clear();





const root = document.getElementById("root");



import Color from "./utils/randomColor.js"
import Circle from "./components/Circle/Circle.js"
import getRandomColor from "./utils/randomColor.js";



export default function Square () {}

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor;
  return square;
});



document.body.append(circleElement);
const SquareElement = Square();

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor;
});

root.append(circleElement, square, pentagon);
