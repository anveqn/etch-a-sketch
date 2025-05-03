const mainBox = document.querySelector("#container");
let chosenSize = 16;

for (let i = 0; i<chosenSize*chosenSize; i++){
  let innerBox = document.createElement("div");
  innerBox.setAttribute("class", "pixel");
  innerBox.setAttribute("style", `width: ${700/chosenSize}px; height: ${700/chosenSize}px;`)
  innerBox.addEventListener("mouseover", function(){innerBox.setAttribute("class", "active");})
  mainBox.appendChild(innerBox);
};