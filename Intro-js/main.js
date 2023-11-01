let miNombre = "Yanina"
let miApellido = "Ferreira"
const miEdad = 23
const miMascota = "Cooper"
const edadMascota = 2
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
let nombreCompleto = miNombre + miApellido
const aux = `Hola mi nombre es ${miNombre} ${miApellido}.
Tengo ${miEdad} años y una mascota que se llama ${miMascota} que tiene ${edadMascota} años`
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productosEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota 
let alumno = {
    altura: 1.62,
    pesoKg: 56,
    calce : 36,
    colorDeCabello:"Negro",
    nacionalidad: "Argentina",
}
console.table(alumno)
console.log(alumno.altura);
console.log(alumno.pesoKg);
console.log(alumno.calce);
console.log(alumno.colorDeCabello);
console.log(alumno.nacionalidad);
let mascota ={
    tamaño: "Grande",
    raza: "mestizo de Pitbull",
    colorDePelaje: "Negro con patitas y cola blanca, hocico color marron",
    comportamiento:"Muy jugeton",
    vacunas:"Todas al dia",
}
console.table(mascota)
console.log(mascota.tamaño);
console.log(mascota.raza);
console.log(mascota.colorDePelaje);
console.log(mascota.comportamiento);
console.log(mascota.vacunas);
const frutas = ["Naranja","Durazno", "Frutilla","Anana","Pera","Uvas"]
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
let edadIngresada = prompt("ingrese su edad")
let soyMayorDeEdad = 18
console.log(` Soy mayor de edad  ${edadIngresada >= soyMayorDeEdad}`);
const numeros = [5,6,7,8,9,10]
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);
const familia = ["hijo","mamá","papá", "abuela", "abuelo"]
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
let textoAleatorio = `los ${frutas[1]} y el numero ${numeros[3]} son algunas de las cosas favoritas del ${familia[0]}`
let compañero1 = Number(prompt("Ingrese edad del compañero1"))
let compañero2Yo = Number(prompt("Ingrese mi edad"))
let edadYani= 23
let edadCami= 24
const verificarIgualdad= `la edad de compañero1 es igual a la compañero2yo, ${edadCami==edadYani}`
console.log(verificarIgualdad);
const verificarSiSoyMayor=`la edad de compañero1 es menor a la compañero2yo, ${edadCami<edadYani}`
console.log(verificarSiSoyMayor);
const verificarSiSoyMenor=`la edad de compañero1 es menor a la compañero2yo, ${edadCami>edadYani}`
console.log(verificarSiSoyMenor);
let edadesDeLasPersonas= Number(prompt("ingrese su edad"))
let alturaDeLasPersonas= Number(prompt("Ingrese su altura"))
const comparacion= edadesDeLasPersonas >=6 && alturaDeLasPersonas >=120
const puedeSubir= `Puede subir a la atraccion, ${comparacion}`
console.log(puedeSubir);
let pase= prompt("Ingrese tipo de Pase")
let saldo= Number(prompt("ingrese su saldo"))
let tipoDePase=("vip","normal","limitados")
let saldoDisponible= `entre 0 y 5000`
const verificarSiPasa= pase ==tipoDePase.vip || saldo >=1000
const puedePasar= `La persona puede pasar, ${verificarSiPasa}`
console.log(puedePasar);