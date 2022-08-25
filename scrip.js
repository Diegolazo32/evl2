function takeValue(x) {
    document.getElementById('resultado').innerHTML += x;
}
function limpiar() {
    document.getElementById('resultado').innerHTML = "";
}
function calcular() {
    var result = eval(document.getElementById('resultado').innerHTML);
    document.getElementById('resultado').innerHTML = result;
}

var uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let cero = document.getElementById('cero');

let mas = document.getElementById('mas');
let menos = document.getElementById('menos');
let por = document.getElementById('por');
let entre = document.getElementById('entre');
let mrc = document.getElementById('mrc');
let mmenos = document.getElementById('m-');
let mmas = document.getElementById('mmas');
let igual = document.getElementById('igual');
let Cc = document.getElementById('delete');
let punto = document.getElementById('punto');

cero.addEventListener("click", function () {
    takeValue(0);
});
uno.addEventListener("click", function () {
    takeValue(1);
});
dos.addEventListener("click", function () {
    takeValue(2);
});
tres.addEventListener("click", function () {
    takeValue(3);
});
cuatro.addEventListener("click", function () {
    takeValue(4);
});
cinco.addEventListener("click", function () {
    takeValue(5);
});
seis.addEventListener("click", function () {
    takeValue(6);
});
siete.addEventListener("click", function () {
    takeValue(7);
});
ocho.addEventListener("click", function () {
    takeValue(8);
});
nueve.addEventListener("click", function () {
    takeValue(9);
});


mas.addEventListener("click", function () {
    takeValue("+");
});
menos.addEventListener("click", function () {
    takeValue("-");
});
por.addEventListener("click", function () {
    takeValue("*");
});
entre.addEventListener("click", function () {
    takeValue("/");
});
Cc.addEventListener("click", function () {
    limpiar();
});
igual.addEventListener("click", function () {
    calcular();
});
punto.addEventListener("click", function () {
    takeValue(".");
});