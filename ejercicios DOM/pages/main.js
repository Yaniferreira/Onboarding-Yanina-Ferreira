//1. Capturar el H1, mediante un ID, en una variable llamada "titulo".
let titulo= document.getElementById("titulo")
//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.
const tituloPrincipal= "Frutas"
titulo.innerHTML= tituloPrincipal
//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 
let headerFooter= document.querySelectorAll(".estilo")
for (const estilo of headerFooter) {
    estilo.classList.add("bg-orange-400")
}
//4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 
let pFooter= document.getElementById("pFooter")
const nuevaAsignacion=`Yanina Ferreira, cohort52`
pFooter.innerHTML= nuevaAsignacion
//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
let contenedor = document.getElementById("contenedor")
//6. Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción). 
function crearCard(objeto) {
    return `<Article class="border border-black w-64 h-80 mx-auto p-4 flex flex-col items-center justify-items-center gap-2">
        <h2 class="text-center font-semibold">${objeto.nombre}</h2>
        <img src="${objeto.foto}" alt="foto" class="w-40 h-40 object-contain">
        <p>${objeto.descripcion}</p>
        </Article>
        `
}
//7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).
function crearMultiplesCards(frutas, contenedor) {
    let card= ""
    for ( elemento of frutas) {
        const cards= crearCard (elemento)
        card+= cards
    }
    contenedor.innerHTML+= card
}
//8. Mostrar las cards con los datos pedidos en el div ".contenedor". 
crearMultiplesCards(frutas,contenedor)

//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
let listas= document.getElementById("listas")
listas.innerHTML += `<h3 class= " font-bold"> Frutas Dulces </h3>`
//10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true. 
function frutasDulces(frutas) {
    const frutaDulce = document.createElement("ul")
    frutaDulce.classList.add("list-disc")
    for (const fruta of frutas) {
       if (fruta.esDulce) {
        let hacerLista= document.createElement("li")
        hacerLista.innerHTML+= fruta.nombre
        frutaDulce.appendChild(hacerLista)
       } 
    }
    return frutaDulce
}
//11. Mostrar la lista de frutas dulces en el div "#lista". 
listas.appendChild(frutasDulces(frutas))