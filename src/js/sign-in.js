//validacion formulario
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const femail = form.elements["femail"].value;
  const fphone = form.elements["fphone"].value;

  if (!fname || !flastname || !femail || !fphone) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  } else if (!validatePhone(fphone)) {
    event.preventDefault();
    alert("Por favor, ingrese un número de celular válido");
  } else {
    const confirmation = confirm(
      "Esta a punto de enviar el formulario, ¿Desea Continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    }
  }
});

//crear funcion validateEmail(femail)
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}

//crear funcion validatePhone(fphone)
function validatePhone(fphone) {
  const re = /^[0-9]/;
  return re.test(String(fphone).toLowerCase());
}
