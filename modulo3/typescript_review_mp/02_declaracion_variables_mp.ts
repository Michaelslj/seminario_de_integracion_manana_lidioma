// const — valor que NO cambia
const IVA: number = 0.12;
const NOMBRE_SISTEMA: string = "Gestión de Inventario";
const MODO_PRUEBA: boolean = false;

// let — valor que SÍ puede cambiar
let stockDisponible: number = 20;
let estadoInventario: string = "Disponible";
let productoActivo: boolean = true;

console.log(
  `Sistema: ${NOMBRE_SISTEMA}, IVA: ${IVA}, Modo prueba: ${MODO_PRUEBA}`
);

console.log(
  `Stock: ${stockDisponible}, Estado: ${estadoInventario}, Activo: ${productoActivo}`
);

stockDisponible += 10;
estadoInventario = "Stock actualizado";
productoActivo = false;

// IVA = 0.15; // Error: Cannot assign to 'IVA' because it is a constant.

console.log(
  `Stock: ${stockDisponible}, Estado: ${estadoInventario}, Activo: ${productoActivo}`
);