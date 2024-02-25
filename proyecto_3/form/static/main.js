const ficha = document.getElementById("Numero_de_Ficha");
const firs_name = document.getElementById("Nombre");
const last_name = document.getElementById("Apellidos");
const correo = document.getElementById("email");
const phone = document.getElementById("telefono");

function validarficha(valor) {
  const paraficha = /^[A-Za-z]{3}_[0-9]{5}$/;
  if (!paraficha.test(valor)) {
    alert(
      "Ingrese un valor válido para el número de ficha solo letras, máximo 10 caracteres."
    );
  } else {
    alert("¡Correcto!");
  }
}

function validarname(valor) {
  const paraname = /^[A-Za-z]{50}$/;
  if (!paraname.test(valor)) {
    alert(
      "ingrese un su nombre maximo 50 letras"
    );
  } else {
    alert("¡Correcto!");
  }
}

function validarlast(valor) {
  const paralastname = /^[A-Za-z]{50}$/;
  if (!paralastname.test(valor)) {
    alert(
      "ingrese un su apellido maximo 50 letras"
    );
  } else {
    alert("¡Correcto!");
  }
}

function restrictNumber(e) {
  var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
  this.value = newValue;
}


function validarEmail(valor) {
  const paraemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!paraemail.test(valor)) {
    alert(
      "ingrese un su apellido maximo 50 letras"
    );
  } else {
    alert("¡Correcto!");
  }

}

phone.addEventListener('input', restrictNumber);
ficha.addEventListener("blur", () => {
  validarficha(ficha.value);
});

firs_name.addEventListener("blur", () => {
  validarname(firs_name.value);
});

last_name.addEventListener("blur", () => {
  validarname(last_name.value);
});




`
const bordeVerde = function (valor) {
  if (valor.classList.contains("borde-rojo")) {
    valor.classList.remove("borde-rojo");
  }
  valor.classList.add("borde-verde");
}

const bordeRojo = function (valor) {
  if (valor.classList.contains("borde-verde")) {
    valor.classList.remove("borde-verde");
  }
  valor.classList.add("borde-rojo");
}
`

// nombre.addEventListener(keypress,letras)


// function onlyAlphabets(e, t) {
//   try {
//     if (window.event) {
//       var charCode = window.event.keyCode;
//     }
//     else if (e) {
//       var charCode = e.which;
//     }
//     else { return true; }
//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
//       return true;
//     else
//       return false;
//   }
//   catch (err) {
//     alert(err.Description);
//   }
// }
// name