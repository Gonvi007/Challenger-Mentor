const pantallaValorAnterior = document.getElementById('valor-anterior');
const pantallaValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOeradores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});