const stockInicial: number = 50;
const stockMinimoAlerta: number = 10;
const costoUnitarioUSD: number = 350.50;
const codigoHexLote: number = 0xff; // Identificador hexadecimal de lote interno
const loteBinario: number = 0b1010; // Indicador de flags binarios de calidad
const stockMaximoPermitido: number = 1_000_000; // Uso de separador visual

console.log(`Lote hexadecimal: ${codigoHexLote}`);
console.log(`Stock máximo permitido: ${stockMaximoPermitido}`);

// Validaciones numéricas del sistema de bodega
console.log(Number.isFinite(stockInicial / 0)); 
console.log(Number.isNaN(costoUnitarioUSD));    

const prefijoSKU: string = "ELEC";
const idProducto: string = "001";
const nombreProducto: string = `Smart TV 55" 4K`;
const categoriaProducto: string = "electronica";

const reporteProducto: string = `SKU: ${prefijoSKU}-${idProducto} | Producto: ${nombreProducto}`;
const estadoInventarioStock: string = `El artículo se encuentra ${stockInicial >= stockMinimoAlerta ? "disponible" : "en riesgo de desabastecimiento"}.`;

const etiquetaBodega: string = `
  Ubicación: Pasillo 3, Rack B
  Artículo: ${nombreProducto}
  Cantidad: ${stockInicial} unidades
`.trim();

// Métodos aplicados a la gestión de cadenas de texto
console.log("   bodega_norte   ".trim());          // "bodega_norte"
console.log(categoriaProducto.toUpperCase());         // "ELECTRONICA"
console.log("2026-06-15".split("-"));                 // ["2026", "06", "15"]
console.log(reporteProducto.includes("Smart TV"));    // true
console.log(etiquetaBodega.endsWith("unidades"));       // true

const stockCritico: boolean = false;
const requiereReabastecimiento: boolean = stockInicial <= stockMinimoAlerta; // Inferido -> false
const permitirVentaOnline: boolean = true; 

if (!stockCritico) {
  console.log("Operación normal: Stock dentro de los parámetros seguros.");
}

let proveedorAsignado: undefined = undefined;
let fechaUltimaAuditoria: null = null;

function buscarProductoPorSKU(sku: string): string | null {
  if (sku === "ELEC-001") return "Smart TV 55 pulgadas 4K";
  return null;
}

const resultadoBusqueda = buscarProductoPorSKU("ELEC-999");

const nombreProveedorFinal = proveedorAsignado ?? "Proveedor Genérico S.A.";
console.log(nombreProveedorFinal); 

const longitudNombreResultado = resultadoBusqueda?.length;
console.log(longitudNombreResultado); 