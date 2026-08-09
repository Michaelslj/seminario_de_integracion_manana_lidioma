// number — enteros y decimales
const precioUnitario: number = 850.75;
const cantidadDisponible: number = 12;
const descuentoAplicado: number = 75;
const idProducts: number = 501;

// string — texto
const nombreArticulo: string = "Monitor LED 24 pulgadas";
const nombreCategoria: string = "Monitores";
const correoProveedor: string = "ventas@tecstore.com";

// boolean — true o false
const stockDispon: boolean = true;
const prodActivo: boolean = true;
const requiereReposicion: boolean = false;

// ── Aritmética con number ──────────────────────────────────────────────
const valorInventario = precioUnitario * cantidadDisponible;
const valorFinal = valorInventario - descuentoAplicado;

console.log(valorFinal);

// ── Métodos de string ──────────────────────────────────────────────────
const descripcionArticulo = "  Monitor LED 24 pulgadas  ";

console.log(descripcionArticulo.trim().toUpperCase());
console.log(correoProveedor.includes("tecstore"));
console.log(correoProveedor.split("@")[1]);
console.log(correoProveedor.split("@"));

let informacionProducto: string =
  "501;Monitor LED 24 pulgadas;12;850.75";

console.log(informacionProducto.split(";"));

// ── Lógica con boolean ─────────────────────────────────────────────────
const disponibleParaVenta: boolean =
  stockDispon && prodActivo;

console.log(disponibleParaVenta);