function comparador() {
    var num1 = parseInt(prompt("Introduce el primer número."));
    var num2 = parseInt(prompt("Introduce el segundo número."));
    var par1, par2, x25_1, x25_2, num1x, num2x;

    if (num1 % 2 == 0) {
        par1 = true;
    }
    if (num2 % 2 == 0) {
        par2 = true;
    }
    if (num1 % 25 == 0) {
        x25_1 = true;
    }
    if (num2 % 25 == 0) {
        x25_2 = true;
    }
    if (par1 && x25_1) {
        num1x = true;
    }
    if (par2 && x25_2) {
        num2x = true;
    }
    if (num1x && num2x) {
        alert("Ambos números son pares y múltiplos de 25.");
    } else if (num1x || num2x) {
        alert("Sólo uno de ellos es par y múltiplo de 25");
    } else {
        alert("Ninguno de ellos es par y múltiplo de 25");
    }
}
function palabra() {
    var palabra = prompt("Introduzca una palabra");

    if (palabra[0] == "a" && palabra[palabra.length - 1] == "a") {
        alert("La palabra empieza y acaba por a");
    } else if (palabra[palabra.length - 1] == "a") {
        alert("La palabra acaba por a");
    } else if (palabra[0] == "a") {
        alert("La palabra empieza por a");
    } else {
        alert("La palabra ni empieza ni termina por a");
    }
}