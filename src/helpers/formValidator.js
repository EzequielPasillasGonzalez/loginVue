function validarCadenaPersonalizada(cadena) {
    // Validar uso exclusivo de minúsculas
    const regexMinusculas = /^[a-z]+$/;
    if (!regexMinusculas.test(cadena)) {
        return false;
    }

    // Validar caracteres especiales solo al inicio y al final
    const regexCaracteresEspeciales = /^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/;
    if (regexCaracteresEspeciales.test(cadena)) {
        return false;
    }

    // No se aceptan números
    const regexNumeros = /[0-9]/;
    if (regexNumeros.test(cadena)) {
        return false;
    }

    // Si pasó todas las validaciones, la cadena es válida
    return true;
}


function validarCadena(cadena) {
    // Expresión regular para verificar si la cadena cumple con los requisitos
    const patron = /^[A-Z0-9][a-zA-Z0-9]{3,9}$/;

    // Comprobación de longitud y formato
    if (patron.test(cadena)) {
        return true; // La cadena es válida
    } else {
        return false; // La cadena no cumple con los requisitos
    }
}

export {
    validarCadenaPersonalizada,
    validarCadena
};