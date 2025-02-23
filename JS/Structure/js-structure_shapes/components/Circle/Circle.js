



import getRandomColor from "../../utils/randomColor";


export default function Circle () {
const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor;
  
  return circle;
});}


const circleElement = Circle();


