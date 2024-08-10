import { submitName } from "./communication.js";

async function buttonEvent(name, errorMessageBox){
  const data = await submitName(name);
  if(data.success) {window.location.href = "/"}
  else {errorMessageBox.textContent = data.message};
  return;
};

function successModal(){
  const modal = document.createElement("div");
  modal.className = "successModal";
  modal.id = "successModal";
  
  const headline = document.createElement("h1");
  headline.textContent = "Success!";
  modal.appendChild(headline);

  const form = document.createElement("form");
  form.classList.add("form");

  const usernameLabel = document.createElement("label");
  usernameLabel.htmlFor = "username";
  usernameLabel.textContent = "Your name: ";
  form.appendChild(usernameLabel);

  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "username";
  usernameInput.id = "username";
  form.appendChild(usernameInput);

  const errorMessageBox = document.createElement("div");
  errorMessageBox.id = "errorMessageBox";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    buttonEvent(usernameInput.value, errorMessageBox);
  });
  form.appendChild(submitButton);

  form.appendChild(errorMessageBox);

  modal.appendChild(form);

  return modal;
};

export {successModal};