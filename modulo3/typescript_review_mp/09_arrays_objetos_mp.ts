// Concepto puro adaptado a la bodega de productos electrónicos
type ProductoInventarioBodega = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  existencia: number;
};

const catalogoBodega: ProductoInventarioBodega[] = [
  { id: 1, nombre: "Smart TV 55 pulgadas 4K", precio: 350.00, disponible: true, existencia: 8 },
  { id: 2, nombre: "Yogurt Entero 1L (Pack)", precio: 1.50, disponible: true, existencia: 45 },
  { id: 3, nombre: "Escritorio de Madera", precio: 120.00, disponible: false, existencia: 0 },
  { id: 4, nombre: "Laptop Gamer Core i7", precio: 1500.00, disponible: true, existencia: 5 },
  { id: 5, nombre: "Caja de Guantes Látex", precio: 12.50, disponible: false, existencia: 0 },
];

// TypeScript sabe que cada "p" es de tipo ProductoInventarioBodega
const productosDisponibles: ProductoInventarioBodega[] = catalogoBodega.filter((p) => p.disponible);
const nombresProductos: string[] = catalogoBodega.map((p) => p.nombre);
const productoMasEconomico: ProductoInventarioBodega | undefined = catalogoBodega.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombresProductos);       // ["Smart TV 55 pulgadas 4K", "Yogurt Entero 1L (Pack)", "Escritorio de Madera", "Laptop Gamer Core i7", "Caja de Guantes Látex"]
console.log(productoMasEconomico?.nombre); // "Yogurt Entero 1L (Pack)"
console.log(productosDisponibles.length);      // 3
console.log(catalogoBodega[4].existencia);     // 0