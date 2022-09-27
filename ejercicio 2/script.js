function contador() {
    var frase = " " + prompt("Introduce una frase.");
    var count = 0;
    var i = 0;
    // solucion en clase
    for (i = 0; i < frase.length; i++) {
        if (frase[i] == " " && frase[i + 1] != " ") {
            count++;
        }
    }
    if (frase[frase.length - 1] == " ") {
        count--;
    }
    alert(count)
}





    //solucion prueba en examen
/*     for (let i = 0; i < frase.length; i++) {
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
    } */
