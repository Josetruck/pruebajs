function contador() {
    var frase = prompt("Introduce una frase.")
    var count = 1
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == " ") {
            count++;
        }
    }
    if (frase == "") {
        alert("La frase no contiene ninguna palabra");
    } else if (frase == " ") {
        alert("La frase solo contiene un espacio");
    } else if (count == 1) {
        alert("La frase contiene una palabra");
    } else {
        alert("La frase contiene " + count + " palabras.");
    }
}