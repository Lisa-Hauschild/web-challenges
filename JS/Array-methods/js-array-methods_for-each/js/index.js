


const  container = document.querySelector("[data-js=container]");


const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];



//colors.forEach ((color)=> {
 //const newColor = document.createElement("div");
//  newColor.classList.add("color-box");
//  newColor.style = `background-color:${color}`;
//  container.append(newColor);
//});

colors.forEach(renderColorBox);
 // const newColor = document.createElement("div");
 // newColor.classList.add("color-box");
 // container.append(newColor);
//});


function renderColorBox(color) {
const newColor = document.createElement("div");
newColor.classList.add("color-box");
newColor.style = `background-color:${color}`;
container.append(newColor);
}