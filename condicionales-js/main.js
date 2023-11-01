//ejercicio 1
let num1= 4
let num2= 5
if (num1 > num2){
console.log(num1);
}
else;{
    console.log(num2);
}
//ejercicio 2
if (num1 == num2){
    console.log("los numeros son iguales");
}
//ejercico 3
else{
    console.log("Los numeros no son iguales");
}
//ejercicio 4
let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"
if(fecha1 > fecha2){
    console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
}
else if ( fecha1 == fecha2){
    console.log("Las fechas son iguales");
}
//ejercicio 5
let primeraFecha= "2018-18-7"
let segundaFecha= "2018-2-17"
if( primeraFecha > segundaFecha){
    console.log(`La fecha ${primeraFecha} es mayor que ${segundaFecha}`);
}
else{
    console.log(`La fecha ${segundaFecha} es mayor que ${primeraFecha}`);
}
//ejercicio 6
let dato1= 5
let dato2= 7
let dato3= 9
if (dato1> dato2 && dato1 > dato3) {
    console.log(`El numero ${dato1} es el mayor`);
}
else if (dato2 > dato1 && dato2 > dato3) {
    console.log(`El numero ${dato2} es el mayor`);
}
else ( dato3 > dato1 && dato3 > dato2); {
    console.log(`El numero ${dato3} es el mayor`);
}
//ejercicio 7
let colores= prompt("ingrese un color")
switch (colores) {
    case "rojo":
        alert("El color de la pasion")
        break;
    case "azul":
        alert("El color del mar")
        break;
    case "verde":
        alert("El color de la naturaleza")
        break;
}
//ejercicio 8
let primerValor= 18
let segundoValor= 15
let operaciones= prompt("Ingrese una operacion")
switch (operaciones) {
    case "suma":
        alert(`La suma de ${primerValor} + ${segundoValor} es ${primerValor+segundoValor}`)
        break;
    case "resta":
        alert(`La resta de ${primerValor}-${segundoValor} es ${primerValor-segundoValor}`)
        break;
    case "multiplicacion":
        alert(`La multiplicacion de ${primerValor}* ${segundoValor} es ${primerValor*segundoValor}`)
        break;
    case "division":
        alert(`La division de ${primerValor}/ ${segundoValor} es ${primerValor/segundoValor}`)
        break;
}
//ejercicio 9
let persona1= {
    nombre: "Juan",
    edad: 39,
    altura: 1.19,
}
let persona2={
    nombre:"Marta",
    edad: 30,
    altura: 1.32
}
if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es mas alto que ${persona2.nombre}`);
    
}
else{
    console.log(`${persona2.nombre} es mas alta que ${persona1.nombre}`);
}
if (persona1.edad> persona2.edad) {
    console.log(`${persona1.nombre} es de mayor edad que ${persona2.nombre}`);
}
else{
    console.log(`${persona2.nombre} es de mayor edad que ${persona1.nombre}`);
}
//ejercicio 10

let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese los años que tiene"))
let altura = Number(prompt("Ingrese su altura)"))
let vision = Number(prompt("Ingrese su vision (del 1 al 10)"))

if (edad >= 18 && altura >= 1.50 && vision >= 8 && vision ){
    console.log("Estas capacitado para conducir");
}
//ejercicio 11
let años= prompt("ingresa tu edad")
switch (true) {
    case años >=0 && años <= 12:
        alert("Eres un infante")
        break;
    case años >12 && años <= 18:
        alert("Eres un adolecente")
        break;
    case años >19 && años <= 45:
        alert("Eres un mayor joven")
        break;
    case años >45:
        alert("Eres un anciano")
        break;  
    case años >100:
        alert("¿En realidad tiene esa edad?")
        break;
}
//ejercicio 12
let numerosSeleccionados= prompt("Ingrese un numero del 1 al 3")
if(numerosSeleccionados >3 || numerosSeleccionados < 1) {
    alert("Ese valor no esta permitido ")
}
else if (numerosSeleccionados <= 3 || numerosSeleccionados >=1) {
    alert(`El numero ingresado es ${numerosSeleccionados}`)
alert(`El doble del numero ingresado es ${numerosSeleccionados * 2}`)
alert(`El tripe del numero ingresado es ${numerosSeleccionados *3}`)
}
let numeroRandom= prompt( "Ingrese el numero que desee")

//ejercicio 13
let nombreIngresado = prompt('Ingrese su nombre')
let pase = prompt( 'Ingrese el tipo de pase "VIP" o "NORMAL"' )
let entrada = prompt( 'Tiene entrada ? "SI" o "NO"' )


if( nombreIngresado == "Yani" || pase == "VIP" ){
    alert( 'Bienvenido ' + nombreIngresado  )
}else if( entrada == "SI"){
    let entradaDos = prompt( 'Desea utlizar la entrada? "SI" o "NO"' )
    if( entradaDos == "SI" ){
        alert( 'Bienvenido ' + nombreIngresado )
    }else{
        alert( 'Adios' )
    }
}else {
    let comprarEntrada = prompt('Queire comprar una entrada? "SI" o "NO"')
    if( comprarEntrada == "SI" ){
        let dinero = Number( prompt('Ingrese el dinero disponible') )
        if( dinero > 1000 ){
            alert( 'Bienvenido ' + nombreIngresado )
        }else{
            alert( 'Compra rechazada' )
        }
    }else{
        alert( 'Adios' )
    }
}
//Ejercicio 14
const incognita= 4
let cifraIngresada= prompt("Ingrese un numero del 1 al 10")
if (cifraIngresada== 4) {
    alert("Ganaste, has adivinado el numero")
}
else if (cifraIngresada < 4) {
    alert("El numero ingresado es menor, vuelve a intentarlo")
}
else if (cifraIngresada > 4) {
    alert("El numero ingresado es mayor,vuelve a intentarlo")
}
else{
    alert("Lo sentimos,ya no quedan intentos")
}
