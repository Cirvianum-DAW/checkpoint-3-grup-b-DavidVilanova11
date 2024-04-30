// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector("#name");
const cognomInput = document.querySelector('input[name="surname"]');

document.getElementById("formulari").addEventListener("submit", (e) => {
  e.preventDefault();
  validarNomICognom();
});

function validarNomICognom() {
  const nameInput = document.querySelector("#name");
  const cognomInput = document.querySelector('input[name="surname"]');
  console.log(nameInput.value);
  if (
    nameInput.value.length < 3 ||
    nameInput.value.length > 50 ||
    cognomInput.value.length < 3 ||
    cognomInput.value.length > 50
  ) {
    // displayError('Els camps Nom i cognom han de tenir una llaragade entre 3 i 50 caràcters.');
    alert(
      "Els camps Nom i cognom han de tenir una llaragade entre 3 i 50 caràcters."
    );
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
