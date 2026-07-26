// number — enteros y decimales
const prec: number = 1200.50;
const stck: number = 15;
const des: number = 50;
const codigo: number = 1001;

// string — texto
const producto: string = "Laptop Gamer";
const categ: string = "Computadoras";
const proveedor: string = "proveedor@inventario.com";

// boolean — true o false
const disponi: boolean = true;
const activo: boolean = true;
const agotado: boolean = false;

// ── Aritmética con number ──────────────────────────────────────────────
const subt = prec * stck;
const tot = subt - des;

console.log(tot);

// ── Métodos de string ──────────────────────────────────────────────────
const nomPro = "  Laptop Gamer  ";

console.log(nomPro.trim().toUpperCase());
console.log(proveedor.includes("inventario"));
console.log(proveedor.split("@")[1]);
console.log(proveedor.split("@"));

let datos: string = "1001;Laptop Gamer;15;1200.50";
console.log(datos.split(";"));

// ── Lógica con boolean ─────────────────────────────────────────────────
const puedeVender: boolean = disponi && activo;

console.log(puedeVender);