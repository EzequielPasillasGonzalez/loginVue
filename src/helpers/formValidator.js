function validarMinusculas(cadena) {
    
    // Expresión regular que coincide con letras minúsculas al principio y al final,
    // y permite caracteres especiales en cualquier otra posición
    var expresionRegular = /^[a-z][^0-9]*[a-z](?:[^a-z\d]+[a-z])*$/;
    
    // Comprobamos si la cadena coincide con la expresión regular
    return expresionRegular.test(cadena);
}

export default validarMinusculas;