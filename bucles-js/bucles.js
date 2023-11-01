//1
let numeroIngresado = Number(prompt("Ingrese un numero del 1 al 100"))
if (numeroIngresado>=1 && numeroIngresado<= 100) {
   for (let i = numeroIngresado; i >= 0; i--) {
    console.log(i);;
    
   } 
}
//2
let numeroIngresado2= Number(prompt("Ingrese un numero del 1 al 10"))
if (numeroIngresado2>=1&&numeroIngresado2<=10) {
    for (let i = 1; i <=10; i++) {
        let resultado= numeroIngresado2*i;
        console.table(`${numeroIngresado2}x${i}=${resultado}`)
        
    }
}
//3
let numeroIngresado3= Number(prompt("Ingrese un numero"))
let variable= 0
while (numeroIngresado3!==0) {
    variable+=numeroIngresado3
    numeroIngresado3= Number(prompt("Ingrese un numero"))
}
console.log(variable);
//4
let variable2= 0
let numeroIngresado4= null
do {
    numeroIngresado4= Number(prompt("Ingrese un numero"))
    variable2+= numeroIngresado4
} while (numeroIngresado4!==0);
console.log(variable2);
//5
let numeroIngresado5= Number(prompt("Ingrese un numero"))
while (variable!==numeroIngresado5) {
    numeroIngresado5= Number(prompt("Ingrese un numero"))
    if (variable>numeroIngresado5) {
        console.log("El numero ingresado es mayor que el secreto");
    }
    else if (variable<numeroIngresado5) {
        console.log("El numero ingresado es menor que el secreto");
    }
}
console.log(`Acertaste el numero era ${variable}`);