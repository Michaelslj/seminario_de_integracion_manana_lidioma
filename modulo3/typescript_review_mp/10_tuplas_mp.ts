// Concepto puro adaptado a la ubicación en pasillos, códigos de color de alerta y pares de inventario
type UbicacionPasilloRack = [pasillo: number, rack: number]; // [pasillo, rack]
type ColorAlertaStock = [rojo: number, verde: number, azul: number]; // [rojo, verde, azul] para indicadores visuales
type SKUStockPar = [sku: string, cantidad: number]; // [sku, cantidad]

const ubicacionSmartTV: UbicacionPasilloRack = [3, 12];
const colorAlertaCritica: ColorAlertaStock = [255, 0, 0]; // Rojo para stock crítico
const parInventario: SKUStockPar = ["ELEC-001", 8];

// Desestructuración (la forma más cómoda de usar tuplas para procesar la bodega)
const [pasillo, rack] = ubicacionSmartTV;
const [rojoAlerta, verdeAlerta, azulAlerta] = colorAlertaCritica;
const [skuItem, stockActualItem] = parInventario;

console.log(`Ubicación Smart TV: Pasillo ${pasillo}, Rack ${rack}`);
console.log(`Color Alerta Stock Crítico: rgb(${rojoAlerta}, ${verdeAlerta}, ${azulAlerta})`);
console.log(`Item SKU: ${skuItem} con stock actual de ${stockActualItem} unidades.`);

// Tuplas con nombre mejoran la legibilidad en reportes de rangos de inventario
type RangoInventarioPermitido = [minimo: number, maximo: number];
const umbralStockBodega: RangoInventarioPermitido = [10, 500]; // Mínimo 10, máximo 500 unidades permitidas por rack