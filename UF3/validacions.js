// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector("#name");
const cognomInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const edatInput = document.querySelector('input[name="age"]');
const genderInput = document.querySelector('input[name="gender"]');
const messageInput = document.querySelector('textarea[name="message"]');

nameInput.addEventListener("input", (e) => {
  if (nameInput.value.length < 3 || nameInput.value.length > 50) {
    displayError(
      nameInput,
      "Els camp nom ha de tenir una llaragada entre 3 i 50 caràcters."
    );
    return;
  }
});

cognomInput.addEventListener("focus", (e) => {
  if (cognomInput.value.length < 3 || cognomInput.value.length > 50) {
    displayError(
      cognomInput,
      "Els camp cognom ha de tenir una llaragade entre 3 i 50 caràcters."
    );
    return;
  }
  return;
});

document.getElementById("formulari").addEventListener("submit", (e) => {
  e.preventDefault();
  validarCamps();
});

function validarCamps() {
  let exp = /[0-9]/;
  let result = exp.test(nameInput.value);

  if (result) {
    displayError(nameInput, "El nom no pot contenir valors numèrics.");
    return;
  }

  result = exp.test(cognomInput.value);

  if (result) {
    displayError(cognomInput, "El cognom no pot contenir valors numèrics.");
    return;
  }

  result = exp.test(cognomInput.value);

  exp = /^[^@]+@[^@]+\.[^@]+$/;
  result = exp.test(emailInput.value);

  if (!result) {
    displayError(emailInput, "Ha de ser un format de correu vàlid.");
    return;
  }

  if (edatInput.value < 18) {
    alert("Has de ser major d'edat.");
    return;
  }

  console.log(messageInput.value.length);

  if (messageInput.value.length < 10 || messageInput.value.length > 200) {
    alert("El missatge ha de contenir entre 10 i 200 caràcters."); // alert perwupe no és input
    return;
  }
}

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...

  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}

// addEventListeners...
