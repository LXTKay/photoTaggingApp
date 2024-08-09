import getCoordinates from "./getCoordinates.js";
import {createDropdown, checkWhetherDropdownExist} from "./dropdown.js";
import {createSelectionBox} from "./selectionBox.js";

const nameList = ["Randy Marsh", "Butters", "PC Principle", "Timmy", "Cartman"]

function pictureClick(e) {
  e.stopPropagation();
  const isDropdownExisting = checkWhetherDropdownExist();
  if(isDropdownExisting) return;

  const [x, y] = getCoordinates(e);

  const selectionBox = createSelectionBox();
  selectionBox.style.left = `${+e.clientX -50}px`;
  selectionBox.style.top = `${+e.clientY -50}px`;
  document.body.append(selectionBox);

  const dropdown = createDropdown(nameList);
  dropdown.style.left = `${+e.clientX - 50}px`;
  dropdown.style.top = `${e.clientY + 70}px`;
  document.body.append(dropdown);

  document.body.addEventListener("click", (e) => {
    if(e.target === dropdown) return;
    dropdown.remove();
    selectionBox.remove();
  });
};

document.querySelector("#waldo").addEventListener("click", (e)=>{
  if(checkWhetherDropdownExist()) return;
  pictureClick(e);
});