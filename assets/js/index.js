precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

/*
totalSpan = document.getElementById("#mas");
totalSpan.innerHTML = cantidad ++

totalSpan = document.getElementById("#menos")
totalSpan.innerHTML = cantidad --*/

/*const mas = () => {
    valorTotal.innerHTML = cantidad * precio
    
}*/

/*function actualizarPrecio(){
    valorTotal = cantidad * precio;
    valorSpan = document.querySelector("valorTotal");
    valorSpan.innerHTML = valorTotal
}*/

/*
const mas = () => {
    cantidadElement = document.getElementById("cantidad");
    precioElement = document.querySelector(".valorTotal");
    actualizarCantidad = parseInt(cantidadElement.innerText);
    cantidadElement.innerText = actualizarCantidad + 1;
    precioElement.innerHTML = actualizarCantidad * precio;
}

const menos = () => {
    cantidadElement = document.getElementById("cantidad");
    precioElement = document.querySelector(".valorTotal");
    actualizarCantidad = parseInt(cantidadElement.innerHTML);
    cantidadElement.innerHTML = actualizarCantidad - 1;
    precioElement.innerHTML = (actualizarCantidad / precio);
}
*/

const mas = () => {
    // Obtener elementos del DOM
    let cantidadElement = document.getElementById("cantidad");
    let precioElement = document.querySelector(".valorTotal");

    // Obtener la cantidad actual y convertirla a número entero
    let cantidad = parseInt(cantidadElement.innerText);

    // Incrementar la cantidad en 1
    cantidad += 1;

    // Actualizar el texto del elemento de cantidad
    cantidadElement.innerText = cantidad;

    // Calcular y actualizar el precio total
    precioElement.innerHTML = cantidad * precio;
}

const menos = () => {
    // Obtener elementos del DOM
    let cantidadElement = document.getElementById("cantidad");
    let precioElement = document.querySelector(".valorTotal");

    // Obtener la cantidad actual y convertirla a número entero
    let cantidad = parseInt(cantidadElement.innerText);

    // Verificar que la cantidad sea mayor a 0 antes de decrementar
    if (cantidad > 0) {
        // Decrementar la cantidad en 1
        cantidad -= 1;

        // Actualizar el texto del elemento de cantidad
        cantidadElement.innerText = cantidad;

        // Calcular y actualizar el precio total
        precioElement.innerHTML = cantidad * precio;
    }
}