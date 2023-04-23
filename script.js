function convertir(){
var valore = parseInt(document.getElementById("valor").value);
var resultado = 0;
var dolar = 4.11;
var euro = 4.85;
if (document.getElementById("uno").checked){
    resultado = valore / dolar;
    alert("el cambio de pesos a Dolares es: $" + resultado.toFixed(2));
}
else if (document.getElementById("dos").checked){
    resultado = valore / euro;
    alert("el cambio de pesos a euro es: " + resultado.toFixed(2));
}
else {
    alert("tienes que completar todos los requerimientos");
}
} 