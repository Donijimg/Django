const ficha = document.getElementById("Numero_de_Ficha");
const firs_name = document.getElementById("Nombre");
const last_name = document.getElementById("Apellidos");
const correo = document.getElementById("email");
const phone = document.getElementById("telefono");

function validarFicha(e) {
  const valor = e.target.value;

  if (valor.trim() === "") { // Verifica si el valor está vacío
    bordeRojo(ficha);
  } else {
    if (valor.length > 9) {
      e.target.value = valor.slice(0, 9);
    }
    if (!/^[A-Za-z0-9_]{0,3}$/.test(valor.slice(0, 3))) {
      e.target.value = valor.slice(0, 3);
    }
    if (valor.length > 3 && valor.indexOf('_') !== 3) {
      e.target.value = valor.slice(0, 3) + '_' + valor.slice(3);
    }
    if (!/^[A-Za-z]{0,3}_[0-9]{0,5}$/.test(valor)) {
      bordeRojo(ficha);
    } else {
      bordeVerde(ficha);
    }
  }
}


function onlyAlphabets(e) {
  var char = e.key;
  if (!/[a-zA-Z]/.test(char)) {
    e.preventDefault();
    bordeRojo(e.target);
  } else {
    if (e.target.value.trim() === "") {
      bordeRojo(e.target);
    } else {
      bordeVerde(e.target);
    }
  }
}

function restrictNames(e) {
  var char = e.key;
  var inputValue = e.target.value + char;
  if (e.target.value.trim() === "") {
    bordeRojo(e.target);
  } else {
    if (!/^[a-zA-Z\s]*$/.test(inputValue) || inputValue.length > 40) {
      e.preventDefault();
      bordeRojo(e.target);
    } else {
      bordeVerde(e.target);
    }
  }
}


function restrictNumber(e) {
  var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
  this.value = newValue;
  if (newValue === '') {
    bordeRojo(this);
  } else {
    bordeVerde(this);
  }
}

function validarEmail(e) {
  const valor = e.target.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (valor.trim() === "") { // Verifica si el valor está vacío
    bordeRojo(email);
  } else {
    if (!emailRegex.test(valor)) {
      bordeRojo(email);
    } else {
      bordeVerde(email);
    }
  }
}






correo.addEventListener("input", validarEmail);
firs_name.addEventListener("keydown", onlyAlphabets);
last_name.addEventListener("keydown", onlyAlphabets);
firs_name.addEventListener("keydown", restrictNames);
last_name.addEventListener("keydown", restrictNames);
phone.addEventListener("input", restrictNumber);
ficha.addEventListener("input", validarFicha);


function bordeVerde(elemento) {
  elemento.classList.remove("borde-rojo");
  elemento.classList.add("borde-verde");
}

function bordeRojo(elemento) {
  elemento.classList.remove("borde-verde");
  elemento.classList.add("borde-rojo");
}




// name