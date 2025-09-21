// Calculadora simple con operaciones básicas
class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(numero) {
        if (numero < 0) {
            throw new Error("No se puede calcular raíz de número negativo");
        }
        return Math.sqrt(numero);
    }

    // Nuevo método agregado para generar conflicto
    porcentaje(valor, porcentaje) {
        return (valor * porcentaje) / 100;
    }
}

// Ejemplo de uso
const calc = new Calculadora();
console.log("Suma:", calc.sumar(5, 3));
console.log("Resta:", calc.restar(10, 4));
console.log("Multiplicación:", calc.multiplicar(6, 7));
console.log("División:", calc.dividir(20, 5));
console.log("Potencia:", calc.potencia(2, 8));
console.log("Raíz cuadrada:", calc.raizCuadrada(25));
console.log("Porcentaje:", calc.porcentaje(200, 15));

module.exports = Calculadora;
