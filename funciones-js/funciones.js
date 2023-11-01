// 1
function sumar() {
    console.log(100*20);
}
//2
sumar()
//3
function primeraSuma(num1,num2) {
    console.log(num1+ num2);
}
//4
let numeroA= 100
let numeroB= 20
primeraSuma(numeroA,numeroB)
//5
function returnSuma(num1, num2) {
    let resultadoSuma= num1 + num2
    return resultadoSuma
}
const resultado= sumar (numeroA, numeroB)
console.log(resultado);
//6
const Anonima = function (num1, num2){
    const resultado = num1+num2
    return resultado
    }
console.log(Anonima)
//7
let anonima= (num1, num2) =>{
    const solucion= num1 + num2
    return solucion
}