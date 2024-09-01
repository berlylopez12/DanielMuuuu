const btnRandom = document.querySelector("#random-btn");
const btnYes = document.querySelector("#yes-btn");

// Inicializamos el tamaño del botón "sí"
let scale = 1;

function agrandarBoton(btn) {
    scale += 0.2; // Incrementa la escala en cada clic
    btn.style.transform = `scale(${scale})`; // Usa transform para escalar el botón
    btn.style.transition = "transform 0.5s ease"; // Transición suave
}

// Evento cuando se hace clic en el botón "no"
btnRandom.addEventListener("click", function () {
    agrandarBoton(btnYes); // Agranda el botón "sí" cada vez más
});