import getCoordinates from "./getCoordinates.js";

function pictureClick(e) {
  const [x, y] = getCoordinates(e);
  alert(x + ", " + y);
};

document.querySelector("#waldo").addEventListener("click", (e)=>{
  pictureClick(e);
});