import getCoordinates from "./getCoordinates.js";
import {createDropdown, checkWhetherDropdownExist} from "./dropdown.js";
import {createSelectionBox} from "./selectionBox.js";

export default function pictureClick(e, nameList) {
  if(checkWhetherDropdownExist()) return;
  e.stopPropagation();
  const isDropdownExisting = checkWhetherDropdownExist();
  if(isDropdownExisting) return;

  const position = getCoordinates(e);
  window.lastClickedPosition = position;

  const image = document.querySelector("#waldo");

  const selectionBox = createSelectionBox();
  selectionBox.style.left = `${+e.clientX -50}px`;
  selectionBox.style.top = `${+e.clientY -50}px`;
  image.append(selectionBox);

  const dropdown = createDropdown(nameList);
  dropdown.style.left = `${+e.clientX - 50}px`;
  dropdown.style.top = `${e.clientY + 70}px`;
  image.append(dropdown);

  document.body.addEventListener("click", function unselect(e) {
    document.body.removeEventListener("click", unselect);
    if(e.target === dropdown) return;
    dropdown.remove();
    const boxToBeRemoved = document.querySelector("#selectionBox");
    if(boxToBeRemoved) boxToBeRemoved.remove();
  });
};