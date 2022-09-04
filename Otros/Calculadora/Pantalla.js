class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual){
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.pantallaValorActual = pantallaValorActual;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores(); 
    }
    imprimirValores() {
        this.pantallaValorActual.textContent = this.valorActual;
        this.pantallaValorAnterior.textContent = this.valorAnterior;
    }
}