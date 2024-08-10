import {submitAnswer} from "./communication.js";
import { updateBoxToSuccess } from "./selectionBox.js";
import { successModal } from "./successModal.js";

function createDropdown(nameList){
  const dropdown = document.createElement("select");
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "--Select--";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  dropdown.append(defaultOption);
  nameList.forEach(name => {
    const option = document.createElement("option");
    option.textContent = name;
    dropdown.append(option);
  });
  dropdown.style.position = 'absolute';
  dropdown.style.display = "inline block";
  dropdown.id = "dropdown";
  dropdown.classList.add("dropdown");

  dropdown.addEventListener("change", async (e) => {
    e.stopPropagation();
    const selectedName = e.target.value;
    const position = window.lastClickedPosition;
    let data = await submitAnswer(selectedName, position);

    //Test
    data = {
      finished: false,
      correctSubmission: true
    };

    if(data.finished){
      const modal = successModal();
      document.body.append(modal);
    }
    if(data.correctSubmission) updateBoxToSuccess();
    
    const boxToBeRemoved = document.querySelector("#selectionBox");
    if(boxToBeRemoved) boxToBeRemoved.remove();
    dropdown.remove();
  });

  return dropdown;
};

function checkWhetherDropdownExist(){
  const dropdown = document.querySelector("#dropdown");
  if(dropdown) return true;
  return false;
};

export {createDropdown, checkWhetherDropdownExist};