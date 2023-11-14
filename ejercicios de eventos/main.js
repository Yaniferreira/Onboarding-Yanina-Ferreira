// 1
let cambiarA = document.getElementById("cambiarA");
let cuadradocolorA = document.getElementById("cuadradocolorA");

cambiarA.addEventListener("click", (evento) => {
    evento.preventDefault();
    cuadradocolorA.innerHTML = "";
    let colorEnTxt = document.createElement("h2");

    if (cuadradocolorA.classList.contains("nuevo-color")) {
        cuadradocolorA.className = "azul w-[200px] h-[100px] bg-blue-500 flex mt-12 justify-center ";
        colorEnTxt.textContent = "azul";
        colorEnTxt.classList = "flex justify-center font-bold";
        cuadradocolorA.appendChild(colorEnTxt);
    } else if (cuadradocolorA.classList.contains("azul")) {
        cuadradocolorA.className = "rojo w-[200px] h-[100px] bg-red-500 flex mt-12 justify-center ";
        colorEnTxt.textContent = "rojo";
        colorEnTxt.classList = "flex justify-center font-bold";
        cuadradocolorA.appendChild(colorEnTxt);
    } else if (cuadradocolorA.classList.contains("rojo")) {
        cuadradocolorA.className = "gris w-[200px] h-[100px] bg-slate-500 flex mt-12 justify-center  ";
        colorEnTxt.textContent = "gris";
        colorEnTxt.classList = "flex justify-center font-bold";
        cuadradocolorA.appendChild(colorEnTxt);
    }
});

// 2
let textoB = document.getElementById("textoB");
let cuadradotextoB = document.getElementById("cuadradotextoB");
let limpiarB = document.getElementById("limpiarB");

textoB.addEventListener("input", (evento) => {
    evento.preventDefault();
    let escribir = textoB.value;
    cuadradotextoB.textContent = escribir;
    cuadradotextoB.className = "gris w-[400px] h-[400px] bg-gray-500 flex mt-12 items-center text-center";
});

limpiarB.addEventListener("click", (evento) => {
    textoB.value = "";
    cuadradotextoB.textContent = "";
    cuadradotextoB.className = "gris w-[200px]  bg-gray-500 flex mt-12 items-center text-center";
});

// 3
function calcularIMC(evento) {
    evento.preventDefault();
    let pesoC = Number(document.getElementById("kilogramos").value);
    let alturaC = Number(document.getElementById("centimetros").value);

    const calcularAlturaEnMC = alturaC / 100;
    const imcC = pesoC / (calcularAlturaEnMC * calcularAlturaEnMC);
    document.getElementById("imcResultado").value = imcC;
}

document.getElementById("calcularC").addEventListener("click", calcularIMC);

// 4
// Conversión de moneda de pesos argentinos a dólares
document.getElementById("convertir").addEventListener("click", convertirADolares);

function convertirADolares(evento) {
    evento.preventDefault();
    let pesoarg = Number(document.getElementById("pesoarg").value);
    let dolares = Number(document.getElementById("dolares").value);
    let tasaDeCambio = 1000; 

    if (pesoarg > 0 && dolares == 0) {
        const resultadoEnUsd = pesoarg / tasaDeCambio;
        document.getElementById("resultado").value = resultadoEnUsd; 
    } else if (dolares > 0 && pesoarg == 0) {
        const resultadoPesoArg = dolares * tasaDeCambio;
        document.getElementById("resultado").value = resultadoPesoArg;
    } else {
        alert("Ingrese un monto válido.");
    }
}
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("pesoarg").value = "";
    document.getElementById("dolares").value = "";
    document.getElementById("resultado").value = "";
});
