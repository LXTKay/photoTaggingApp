import {submitAnswer} from "./communication.js";

function createDropdown(nameList){
  const dropdown = document.createElement("select");
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
    const data = await submitAnswer(selectedName);
  })
  return dropdown;
};

function checkWhetherDropdownExist(){
  const dropdown = document.querySelector("#dropdown");
  if(dropdown) return true;
  return false;
};

export {createDropdown, checkWhetherDropdownExist};