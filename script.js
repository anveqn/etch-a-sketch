const mainBox = document.querySelector("#container");
const sizeButton = document.querySelector("#size");

let boardSetup = () => {
  let chosenSize = prompt("Choose the number of squares per side (max 100)");
  for (let i = 0; i<chosenSize*chosenSize; i++){
    let innerBox = document.createElement("div");
    innerBox.setAttribute("class", "pixel");
    innerBox.setAttribute("style", `width: ${700/chosenSize}px; height: ${700/chosenSize}px;`)
    innerBox.addEventListener("mouseover", function(){innerBox.setAttribute("class", "active");})
    mainBox.appendChild(innerBox);
  };
};

let deleteBoard = () => {
  while (mainBox.firstChild){
    mainBox.removeChild(mainBox.firstChild);
  };
};

sizeButton.addEventListener("click", function(){
  deleteBoard();
  boardSetup();
});