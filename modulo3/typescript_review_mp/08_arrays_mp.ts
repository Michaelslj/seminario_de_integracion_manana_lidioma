// Dos sintaxis equivalentes adaptadas a catálogos y costos de bodega
const stockProductos: number[] = [8, 15, 42, 3, 20]; // Cantidades actuales en distintas bodegas
const categoriasPermitidas: Array<string> = ["electronica", "hogar", "perecedero", "ropa"]; // forma genérica

// TypeScript infiere el tipo del array de costos unitarios si se inicializa directamente
const costosUnitariosInferidos = [350.00, 45.50, 1.50, 120.00]; // number[] inferido

console.log(`Stock Actual en Bodegas: ${stockProductos}`);
console.log(`Categorías Válidas: ${categoriasPermitidas}`);
console.log(`Costos Unitarios Inferidos: ${costosUnitariosInferidos}`);

// Métodos tipados: el compilador conoce el tipo del elemento del inventario
const stockDuplicado: number[] = stockProductos.map((stock) => stock * 2); // Simula incremento por lote doble
const stocksCriticos: number[] = stockProductos.map((s) => s).filter((stock) => stock < 10); // Filtra los productos con stock menor a 10 unidades
const stockTotalBodega: number = stockProductos.reduce((acumulado, stock) => acumulado + stock, 0); // Suma total de unidades físicas

console.log(`Stock Duplicado por Lote: ${stockDuplicado}`);
console.log(`Stocks Críticos Detectados: ${stocksCriticos}`);
console.log(`Stock Total en Bodega: ${stockTotalBodega}`);

// Mutación (modifica el arreglo original de stock al recibir o despachar mercancía)
stockProductos.push(50); // Ingresa un nuevo lote al final del registro de la bodega
console.log(`Stock con Nuevo Lote al Final: ${stockProductos}`);      

stockProductos.unshift(12); // Ingresa un cargamento prioritario al inicio
console.log(`Stock con Ingreso Prioritario al Inicio: ${stockProductos}`); 

const stockUltimoDespachado = stockProductos.pop(); // Retira el último registro por cierre de sección
console.log(`Stock tras Despachar Último Registro: ${stockProductos}`); 

const stockPrimerDespachado = stockProductos.shift(); // Retira el primer registro de la fila de distribución
console.log(`Stock tras Despachar Primer Registro: ${stockProductos}`); 

// Búsqueda dentro del inventario de bodega
const existeStockEspecifico: boolean = stockProductos.includes(42); // Verifica si existe una cantidad exacta de 42 unidades
console.log(`¿Existe lote con exactamente 42 unidades?: ${existeStockEspecifico}`); 

const indiceLote: number = stockProductos.indexOf(42);
console.log(`Posición del lote con 42 unidades: ${indiceLote}`); // posición o -1 si no se encuentra

const primerExcesoStock: number | undefined = stockProductos.find((stock) => stock > 40); // Busca el primer stock mayor a 40 unidades
console.log(`Primer stock encontrado mayor a 40 unidades: ${primerExcesoStock}`);