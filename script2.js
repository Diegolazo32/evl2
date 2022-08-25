/*Crear dos calculadoras con HTML y CSS y crear con JS el Objeto Calculadora
utilizando el patrón function factory. El objeto calculadora debe heredar a dos objetos
calculadoraBasica y CalculadoraCientífica, que van a heredar sus funciones básicas de 
calculadora. Luego para calculadora científica agregar las funciones para potenciación
raíz cuadrada y valor absoluto.*/

var Calculadora = (function(){

    var result;

    var Calculadora = function(){
        this.resultado = 0;
    }
    calcular = function()
    {
        
        result = eval(document.getElementById('restult').innerHTML);
        document.getElementById('restult').innerHTML = result;
        console.log(result)
        
    }
     limpiar = function() {
        document.getElementById('restult').innerHTML = "";
        console.log("klasd")
    }


    return Calculadora;
})();

var CalculadoraBasica = (function(){
    var CalculadoraBasica = function(){
        this.resultado = 0;
    }
    CalculadoraBasica.prototype = new Calculadora();
    return CalculadoraBasica;
}   )();

var CalculadoraCientifica = (function(){
    var CalculadoraCientifica = function(){
        this.resultado = 0;
    }
    CalculadoraCientifica.prototype = new Calculadora();
    CalculadoraCientifica.prototype.potencia = function(num1, num2){
        this.resultado = Math.pow(num1, num2);
        return this.resultado;
    }
    CalculadoraCientifica.prototype.raiz = function(num1, num2){
        this.resultado = Math.pow(num1, 1/num2);
        return this.resultado;
    }
    CalculadoraCientifica.prototype.valorAbsoluto = function(num1){
        this.resultado = Math.abs(num1);
        return this.resultado;
    }
    return CalculadoraCientifica;
})();

var calculadoraBasica = new CalculadoraBasica();
var calculadoraCientifica = new CalculadoraCientifica();



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
let entre = document.getElementById('dividor');
let mrc = document.getElementById('mrc');
let mmenos = document.getElementById('m-');
let mmas = document.getElementById('mmas');
let igual = document.getElementById('igual');
let Cc = document.getElementById('reset');
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