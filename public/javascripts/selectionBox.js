function createSelectionBox(){
  const box = document.createElement("div");
  box.className = "selectionBox";
  box.id = "selectionBox";
  box.style.position = 'absolute';
  box.style.display = "inline block";
  return box;
};

export {createSelectionBox};