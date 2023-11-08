1//
const mensaje = "Hola"

function imprimirMensaje(mensaje) {
    console.log(mensaje)
}

const imprimirMensajeFlecha = mensaje => console.log(mensaje)
imprimirMensajeFlecha(mensaje)
2//
function crearMultiplicacion(numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
}

const crearMultiplicacionFlecha = (numero1, numero2) => numero1 * numero2
console.log(crearMultiplicacionFlecha(7, 5))
3//
array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let nuevoArray= array.map ((numero1,numero2) => crearMultiplicacionFlecha (numero1,numero2))
console.log(nuevoArray);
4//
console.log(beers)

function mayorAlcohol(array) {
    return array.toSorted((a, b) => b.abv - a.abv).slice(0, 10)
}

console.log("mas alcohol:")
console.log(mayorAlcohol(beers))
5//
function cervezasAmargor(beers) {
    let ibuMenos = beers.toSorted((a, b) => a.ibu - b.ibu)
    ibuMenos = ibuMenos.slice(0, 10)
    return ibuMenos
}
console.log(cervezasAmargor(beers))
6//
function buscarCerveza(beers, nombre) {
    return beers.find(beer => beer.name == nombre)
}
console.log(buscarCerveza(beers, "Pilsen Lager"))
7//
const ibuIngresado= 35
function buscarAmargura(array, ibu) {
    let cerveza = array.find((beer) => beer.ibu == ibu)
    if (cerveza != undefined) {
        return cerveza
    }
    console.log(`No existe ningna cerveza con un ibu de ${ibuIngresado}`)
    return undefined
}
console.log(buscarAmargura(beers,32));
8//
function nombreCerveza(beers, nombre) {
    let cervezaNombre = beers.filter(beer => beer.name == nombre)[0]
    if (!cervezaNombre) {
        console.log(`${nombre} no existe`);
    }
    return cervezaNombre
}
console.log(nombreCerveza(beers, "Avery Brown Dredge"));
console.log(nombreCerveza(beers, "Imperial Ipa"));
9//

function cantidadAlcohol(array, alcohol) {
    const alcoholNivel = array.filter(beer => beer.abv <= alcohol)
    return alcoholNivel.map(beer => beer = { name: beer.name, abv: beer.abv, ibu: beer.ibu })
}
console.log(cantidadAlcohol(beers, 6))
10//
function cervezasOrdenadas(array, propiedad, ascendente) {
    return ascendente ? array.toSorted((beer1, beer2) => beer1[propiedad] - beer2[propiedad]).slice(0,10) : array.toSorted((beer1, beer2) => beer1[propiedad] - beer2[propiedad]).reverse().slice(0,10)
}

console.log(cervezasOrdenadas(beers, "abv", true))
11//
function tablacomparativa(beers, id) {
    const buscartable = document.getElementById(id)
    function crearFila(beer) {
        let fila = `<tr>
            <td>${beer.name}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
        </tr>`
        return fila
    }
    beers.forEach(beer => {
        let fila2 = crearFila(beer)
        buscartable.innerHTML += fila2
    });
}




