const mainBox = document.querySelector("#container");
let chosenSize = 50;

for (let i = 0; i<chosenSize*chosenSize; i++){
  let innerBox = document.createElement("div");
  innerBox.textContent = ".";
  innerBox.setAttribute("class", "pixel");
  innerBox.setAttribute("style", `width: ${700/chosenSize}px; height: ${700/chosenSize}px;`)
  mainBox.appendChild(innerBox);
};
