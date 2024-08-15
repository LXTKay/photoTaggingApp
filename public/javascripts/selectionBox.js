function createSelectionBox() {
  const box = document.createElement("div");
  box.className = "selectionBox";
  box.style.position = 'absolute';
  box.style.display = "inline block";
  box.id = "selectionBox";
  return box;
};

function updateBoxToSuccess() {
  const successBox = document.querySelector("#selectionBox");
  successBox.className = "successBox";
  successBox.removeAttribute("id");
};

export { createSelectionBox, updateBoxToSuccess };