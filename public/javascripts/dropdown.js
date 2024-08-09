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
  return dropdown;
};

function checkWhetherDropdownExist(){
  const dropdown = document.querySelector("#dropdown");
  if(dropdown) return true;
  return false;
};

export {createDropdown, checkWhetherDropdownExist};