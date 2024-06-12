var aficiones = [];

function validar() {
    var return_nombre = validar_nombre();
    var return_contrasenha = validar_contrasenha();
    var return_confirmar = validar_contrasenha_confirmacion();
    var return_comuna = validar_comuna();
    var return_direccion = validar_direccion();
    var return_numero_direccion = validar_numero_direccion();
    var return_numero_telefonico = validar_numero_telefono();
    var return_direccion_url = validar_direccion_url();
    var return_cantidad_array = validar_cantidad_array();
    return return_nombre && return_contrasenha && return_confirmar && return_comuna && return_direccion && return_numero_direccion && return_numero_telefonico && return_direccion_url && return_cantidad_array;
}

function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    var primerCar = nombre.charAt(0);
    var ultimo_caracter_nombre = nombre.slice(-1);
    console.log(nombre);
    
    if (nombre.trim() == "") {
        div_error_nombre.innerHTML = "Casilla obligatoria.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (nombre.length < 5) {
        div_error_nombre.innerHTML = "El nombre debe tener un mínimo de 5 caracteres.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (nombre.length > 10) {
        div_error_nombre.innerHTML = "El nombre debe tener un máximo de 10 caracteres.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (nombre.includes(" ")) {
        div_error_nombre.innerHTML = "El nombre no debe incluir espacios en blanco.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (isNaN(primerCar) == false) {
        div_error_nombre.innerHTML = "El nombre de usuario no debe empezar con números.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (comprobar_contencion_enteros(nombre) == true && isNaN(ultimo_caracter_nombre) == true) {
        div_error_nombre.innerHTML = "El nombre de usuario solo debe llevar números al final.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    }  else if (comprobar_caracteres(nombre) == true) {
        div_error_nombre.innerHTML = "El nombre de usuario no debe llevar caracteres especiales.";
        div_error_nombre.className = "text-danger small mt-1";
        input_nombre.classList.add("is-invalid");
        return false;
    } else {
        div_error_nombre.innerHTML = 'Está bien.';
        div_error_nombre.className = "text-success small mt-1";
        input_nombre.classList.remove("is-invalid");
        input_nombre.classList.add("is-valid");
        return true;
    }
}

function validar_contrasenha() {
    var input_contrasenha = document.getElementById("input-contrasenha");
    var div_error_contrasenha = document.getElementById("error-contrasenha");
    var input_nombre = document.getElementById("input-nombre");
    var nombre = input_nombre.value;
    var nombreLow = nombre.toLowerCase();
    var contrasenha = input_contrasenha.value;
    var contrasenhaLow = contrasenha.toLowerCase();
    console.log(contrasenha);

    if (contrasenha.trim() == "") {
        div_error_contrasenha.innerHTML = "Casilla obligatoria.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else if (contrasenhaLow.includes(nombreLow)) {
        div_error_contrasenha.innerHTML = "La contraseña no debe contener tu nombre de usuario.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false; 
    }  else if (contrasenha.length < 3) {
        div_error_contrasenha.innerHTML = "La contraseña debe tener un mínimo de 3 caracteres.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else if (contrasenha.length > 6) {
        div_error_contrasenha.innerHTML = "La contraseña debe tener un máximo de 6 caracteres.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else if (contrasenha.includes(" ")) {
        div_error_contrasenha.innerHTML = "La contraseña no debe incluir espacios en blanco.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else if (comprobar_enteros(contrasenha) == false) {
        div_error_contrasenha.innerHTML = "La contraseña por lo menos debe incluir un número.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else if (comprobar_letras(contrasenha) == false) {
        div_error_contrasenha.innerHTML = "La contraseña por lo menos debe incluir una letra.";
        div_error_contrasenha.className = "text-danger small mt-1";
        input_contrasenha.classList.add("is-invalid");
        return false;
    }  else {
        div_error_contrasenha.innerHTML = "Está bien.";
        div_error_contrasenha.className = "text-success small mt-1";
        input_contrasenha.classList.remove("is-invalid");
        input_contrasenha.classList.add("is-valid");
        return true;
    }
}

function validar_contrasenha_confirmacion() {
    var input_confirmar = document.getElementById("input-confirmar");
    var confirmar_contrasenha = input_confirmar.value;
    var input_contrasenha = document.getElementById("input-contrasenha");
    var contrasenha = input_contrasenha.value;
    var div_error_confirmar = document.getElementById("error-confirmacion-contrasenha");

    if (confirmar_contrasenha.trim() == "") {
        div_error_confirmar.innerHTML = "Casilla obligatoria";
        div_error_confirmar.className = "text-danger small mt-1";
        input_confirmar.classList.add("is-invalid");
        return false;
    } else if (contrasenha == confirmar_contrasenha) {
        div_error_confirmar.innerHTML = "Está bien.";
        div_error_confirmar.className = "text-success small mt-1";
        input_confirmar.classList.remove("is-invalid");
        input_confirmar.classList.add("is-valid");
        return true;
    } else {
        div_error_confirmar.innerHTML = "Las contraseñas no coinciden";
        div_error_confirmar.className = "text-danger small mt-1";
        input_confirmar.classList.add("is-invalid");
        return false;
    }
}

function validar_comuna() {
    var select_ciudad = document.getElementById("select-comuna");
    var div_error_ciudad = document.getElementById("error-comuna");
    var ciudad = select_ciudad.value;
    console.log(ciudad);

    if (ciudad == "default") {
        div_error_ciudad.innerHTML = 'Debes seleccionar una comuna.';
        div_error_ciudad.className = "text-danger small mt-1";
        select_ciudad.classList.add("is-invalid");
        return false;
    } else {
        div_error_ciudad.innerHTML = 'Está bien.';
        div_error_ciudad.className = "text-success small mt-1";
        select_ciudad.classList.remove("is-invalid");
        select_ciudad.classList.add("is-valid");
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    console.log(direccion);

    if (direccion.trim() == "") {
        div_error_direccion.innerHTML = "Casilla obligatoria.";
        div_error_direccion.className = "text-danger small mt-1";
        input_direccion.classList.add("is-invalid");
        return false;
    } else if (comprobar_contencion_enteros(direccion) == true) {
        div_error_direccion.innerHTML = "La dirección no puede llevar números.";
        div_error_direccion.className = "text-danger small mt-1";
        input_direccion.classList.add("is-invalid");
        return false;
    } else {
        div_error_direccion.innerHTML = "Está bien.";
        div_error_direccion.className = "text-success small mt-1";
        input_direccion.classList.remove("is-invalid");
        input_direccion.classList.add("is-valid");
        return true;  
    }
} 

function validar_numero_direccion() {
    var input_numero_direccion = document.getElementById("input-numero");
    var div_error_numero_direccion = document.getElementById("error-numero");
    var numero_direccion = input_numero_direccion.value;
    console.log(numero_direccion);

    if (numero_direccion.trim() == "") {
        div_error_numero_direccion.innerHTML = "Casilla obligatoria.";
        div_error_numero_direccion.className = "text-danger small mt-1";
        input_numero_direccion.classList.add("is-invalid");
        return false;
    } else if (comprobar_numero_integer(numero_direccion) == true) {
        div_error_numero_direccion.innerHTML = "Está bien.";
        div_error_numero_direccion.className = "text-success small mt-1";
        input_numero_direccion.classList.remove("is-invalid");
        input_numero_direccion.classList.add("is-valid");
        return true;
    } else {
        div_error_numero_direccion.innerHTML = "Solo puedes ingresar enteros en esta casilla.";
        div_error_numero_direccion.className = "text-danger small mt-1";
        input_numero_direccion.classList.add("is-invalid");
        return false;
    }
}

function validar_numero_telefono() {
    var input_numero_telefonico = document.getElementById("input-telefono");
    var div_error_numero_telefonico = document.getElementById("error-telefono");
    var telefono = input_numero_telefonico.value;
    var primerNum = telefono.charAt(0);
    console.log(telefono);

    if (telefono.trim() == "") {
        div_error_numero_telefonico.innerHTML = "Casilla obligatoria.";
        div_error_numero_telefonico.className = "text-danger small mt-1";
        input_numero_telefonico.classList.add("is-invalid");
        return false;
    } else if (telefono.length != 9) {
        div_error_numero_telefonico.innerHTML = "El formato debe estar conformado por 9 enteros.";
        div_error_numero_telefonico.className = "text-danger small mt-1";
        input_numero_telefonico.classList.add("is-invalid");
        return false; 
    } else if (primerNum != '9') {
        div_error_numero_telefonico.innerHTML = "El formato debe empezar con un '9'.";
        div_error_numero_telefonico.className = "text-danger small mt-1";
        input_numero_telefonico.classList.add("is-invalid");
        return false;   
    } else if (comprobar_numero_integer(telefono) == true) {
        div_error_numero_telefonico.innerHTML = "Está bien.";
        div_error_numero_telefonico.className = "text-success small mt-1";
        input_numero_telefonico.classList.remove("is-invalid");
        input_numero_telefonico.classList.add("is-valid");
        return true;  
    } else {
        div_error_numero_telefonico.innerHTML = "Solo puedes ingresar enteros en esta casilla.";
        div_error_numero_telefonico.className = "text-danger small mt-1";
        input_numero_telefonico.classList.add("is-invalid");
        return false;
    }
}

function validar_direccion_url() {
    var input_direccion_url = document.getElementById("input-nombre-dominio");
    var div_error_direccion_url = document.getElementById("error-dominio");
    var direccion_url = input_direccion_url.value;
    var direccion_limpia = direccion_url.split(".").join("");
    var partes_dominio = direccion_url.split(".");
    var nombre_dominio_web = partes_dominio[1];
    var nombre_extension_dominio_web = partes_dominio[2];
    var ultimas_direcciones_url = [partes_dominio[1], partes_dominio[2]];
    var join_ultimas_direcciones = ultimas_direcciones_url.join(".")
    console.log(partes_dominio[2]);
    console.log(direccion_url);

    if (direccion_url.trim() == "") {
        console.log("Direccion URL opcional");
        input_direccion_url.classList.remove("is-invalid");
        return true;
    }  else if (direccion_url.includes(" ")) {
        div_error_direccion_url.innerHTML = "La dirección no debe incluir espacios en blanco.";
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false;
    }  else if (comprobar_mayusculas(direccion_url) == true) {
        div_error_direccion_url.innerHTML = "La dirección URL no debe contener mayúsculas";
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false;
    }  else if (direccion_url.startsWith("www.") == false) {
        div_error_direccion_url.innerHTML = "La dirección debe empezar con 'www.'";
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false; 
    }  else if (comprobar_caracteres(direccion_limpia) == true) {
        div_error_direccion_url.innerHTML = "La dirección no debe contener caracteres especiales.";
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false; 
    }  else if (contar_iteracion(direccion_url, ".") > 2) {
        div_error_direccion_url.innerHTML = "La dirección no debe contener más de dos puntos."
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false;  
    }   else if (nombre_dominio_web == "") {
        div_error_direccion_url.innerHTML = "Debes específicar un nombre de dominio."
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false;   
    }   else if (join_ultimas_direcciones.slice(-1) == ".") {
        div_error_direccion_url.innerHTML = "Debes específicar una extensión de dominio."
        div_error_direccion_url.className = "text-danger small mt-1";
        input_direccion_url.classList.add("is-invalid");
        return false;     
    }   else {
        div_error_direccion_url.innerHTML = "Está bien."
        div_error_direccion_url.className = "text-success small mt-1";
        input_direccion_url.classList.remove("is-invalid");
        input_direccion_url.classList.add("is-valid");
        return true; 
    }
}

function actualizar_lista() {
    var div_lista = document.getElementById("lista_aficiones");
    div_lista.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i in aficiones) {
        var li = document.createElement("li");
        li.innerHTML = aficiones[i];
        li.className = "list-group-item";

        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = '-';
        botonEliminar.className = "btn btn-danger btn-sm float-end";

        botonEliminar.id = "botonEliminar_" + i;

        botonEliminar.addEventListener("click", function() {
            var indice = this.id.split("_")[1];
            aficiones.splice(indice, 1); 
            actualizar_lista();
        });

        li.appendChild(botonEliminar);
        ul.appendChild(li);
    }
    div_lista.appendChild(ul);
}

function validar_cantidad_array () {
    var input_aficion = document.getElementById("input-aficion");
    var div_error_input_aficion = document.getElementById("error-aficion");
    var aficion = input_aficion.value;

    if (aficiones.length === 1) {
        div_error_input_aficion.innerHTML = "Debes ingresar por lo menos 2 aficiones.";
        div_error_input_aficion.className = "text-danger small mt-1";
        input_aficion.classList.add("is-invalid");
        return false;
    } else {
        input_aficion.classList.remove("is-invalid");
        div_error_input_aficion.innerHTML = "<br>"
    }
}

function agregar_aficiones() {
    var input_aficion = document.getElementById("input-aficion");
    var div_error_input_aficion = document.getElementById("error-aficion");
    var aficion = input_aficion.value;
    const listado_aficiones = aficiones.map(aficionstring => aficionstring.toLowerCase());
    console.log(listado_aficiones.includes(aficion));

    if (listado_aficiones.includes(aficion.toLowerCase()) === true) {
        div_error_input_aficion.innerHTML = "No puedes ingresar valores duplicados";
        div_error_input_aficion.className = "text-danger small mt-1";
        input_aficion.classList.add("is-invalid");
        return false;
    }  else if (aficion.trim() == "") {
        div_error_input_aficion.innerHTML = "No puedes ingresar valores en blanco.";
        div_error_input_aficion.className = "text-danger small mt-1";
        input_aficion.classList.add("is-invalid");
        return false;
    }  else if (aficion.trim() != "") {
        aficiones.push(aficion);
        input_aficion.value = "";
        input_aficion.classList.remove("is-invalid");
        div_error_input_aficion.innerHTML = "<br>"
        actualizar_lista();
        for (var i = 0; i < aficiones.length; i++) {
            console.log(i + ": " + aficiones[i]);
        }
        var cont = 0;
        while (cont < aficiones.length) {
            console.log(cont + ": " + aficiones[cont]);
            cont++;
        }
        for (var x in aficiones) {
            console.log(x + ": " + aficiones[x]);
        }
    } else {
        div_error_input_aficion.innerHTML = "<br>"
        input_aficion.classList.remove("is-invalid");
    }
}

function comprobar_caracteres(stringC) {
    for (let i = 0; i < stringC.length; ++i) {
        let ch = stringC.charCodeAt(i);
        if (
            !(ch >= 65 && ch <= 90) && 
            !(ch >= 97 && ch <= 122) && 
            !(ch >= 48 && ch <= 57) 
        ) {
            return true;
        }
    }
}

function comprobar_enteros(stringC) {
    for (let i = 0; i < stringC.length; ++i) {
        let ch = stringC.charCodeAt(i);
        if (
            !(ch >= 65 && ch <= 90) &&
            !(ch >= 97 && ch <= 122) 
        ) {
            return true;
        }
    }
    return false; 
}

function comprobar_contencion_enteros(stringc) {
    for (var i = 0; i < stringc.length; i++) {
        if (!isNaN(parseInt(stringc[i]))) {
            return true;
        }
    }
    return false;
}

function comprobar_numero_integer(stringc) {
    return !isNaN(stringc) && 
           parseInt(Number(stringc)) == stringc && 
           !isNaN(parseInt(stringc, 10));
  }

function comprobar_letras(stringC) {
    for (let i = 0; i < stringC.length; ++i) {
        let ch = stringC.charCodeAt(i);
        if (
            !(ch >= 48 && ch <= 57) 
        ) {
            return true;
        }
    }
    return false; 
}

function comprobar_mayusculas(stringC) {
    for (let i = 0; i < stringC.length; ++i) {
        let ch = stringC.charCodeAt(i);
        if (ch >= 65 && ch <= 90) { 
            return true; 
        }
    }
    return false;
}

function contar_iteracion(string, char) {
    let cuenta = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            cuenta++;
        }
    }
    return cuenta;
}

document.getElementById('botonContrasenha').addEventListener('click', function () {
    const passwordInput = document.getElementById('input-contrasenha');
    const togglePasswordIcon = document.getElementById('botonContrasenhaIcono');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('bi-eye-fill');
        togglePasswordIcon.classList.add('bi-eye-slash-fill');
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.classList.remove('bi-eye-slash-fill');
        togglePasswordIcon.classList.add('bi-eye-fill');
    }
})
