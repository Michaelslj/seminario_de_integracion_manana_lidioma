const codigoProducto: number = 1001;
const nombreProducts: string = "Laptop Gamer";
const disponible: boolean = true;

const stock = 25;                 // number
const categoria = "Computadoras"; // string
const activ = true;              // boolean

let preci: number;
preci = 1250.50;

let codig: number | string = 1001;
codig = "P-1001";

function registrarProducto(
  nombre: string,
  cantidad: number
): string {
  return `Products: ${nombre} | Cantidad: ${cantidad}`;
}

console.log(
  registrarProducto("Monitor", 8)
);