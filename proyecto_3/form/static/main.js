const ficha = document.getElementById("Numero_de_Ficha");
const firs_name = document.getElementById("Nombre");
const last_name = document.getElementById("Apellidos");
const correo = document.getElementById("email");
const phone = document.getElementById("telefono");
const mujer = document.getElementById("mujer");
const hombre = document.getElementById("hombre");
const otro = document.getElementById("otro");
const ciudad = document.getElementById("ciudad")
const html = document.getElementById("html")
const css = document.getElementById("css")
const php = document.getElementById("php")
const javascript = document.getElementById("javascript")
const java = document.getElementById("Java") 
const sql = document.getElementById("sql")
const uml = document.getElementById("uml")



function validarficha(ficha) {
  const paraficha = /^[A-Za-z]{3}_[0-9]{5}$/;
  if (!paraficha.test(ficha.value)) {
    alert(
      "ingrese un su ficha solo 3 letras un _ numeros de 0 al 9 limite 5"
    );
  } else {
    alert("¡Correcto!");
  }
}

function validarname(firs_name) {
  const paraname = /^[a-zA-Z]*$/;
  if (!paraname.value == "") {
    alert("Enter a name");
    firs_name.value.focus();
    return false;
  }
  if (!paraname.test(e.value)) {
    alert("Invalid characters");
    firs_name.name.focus();
    return false;
  }
}

function validarlast(last_name) {
  const paralastname = /^[A-Za-z]{50}$/;
  if (!paralastname.test(last_name)) {
    alert(
      "ingrese un su apellido maximo 50 letras"
    );
  } else {
    alert("¡Correcto!");
  }
}


function restrictNumber() {
  const number = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
  this.value = number;
}


function validarEmail(correo) {
  const paraemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!paraemail.test(correo)) {
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
  validarlast(last_name.value);
});

correo.addEventListener("blur", () => {
  validarEmail(correo.value);
});



// nombre.addEventListener(keypress,letras)
