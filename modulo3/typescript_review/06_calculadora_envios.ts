// Sistema de gestión de inventario y valoración de stock para una bodega.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type CategoriaProducto = "electronica" | "hogar" | "perecedero" | "ropa";

interface ProductoInventario {
codigo: string;
nombre: string;
stockActual: number;
stockMinimo: number;
costoUnitario: number;
categoria: CategoriaProducto;
}

const COSTO_ALMACENAJE_PCT: Record<CategoriaProducto, number> = {
electronica: 0.05, // 5% de costo de mantenimiento por unidad
hogar:       0.03,
perecedero:  0.08, // Mayor costo por refrigeración/riesgo
ropa:        0.02,
};

function evaluarInventario(producto: ProductoInventario): string {
const valorTotalStock = producto.stockActual * producto.costoUnitario;
const costoAlmacenaje = valorTotalStock * COSTO_ALMACENAJE_PCT[producto.categoria];
const requiereReabastecimiento = producto.stockActual <= producto.stockMinimo;

return ${producto.codigo} Producto    : ${producto.nombre} Categoría   : ${producto.categoria} Stock Actual: ${producto.stockActual} unidades (Mín: ${producto.stockMinimo}) Valor Stock : $${valorTotalStock.toFixed(2)} Almacenaje  : $${costoAlmacenaje.toFixed(2)} Estado      : ${requiereReabastecimiento ? "⚠️ REABASTECER URGENTE" : "✅ Stock Óptimo"} ─────────────────────────.trim();
}

const producto1: ProductoInventario = {
codigo: "ELEC-001",
nombre: "Smart TV 55 pulgadas 4K",
stockActual: 8,
stockMinimo: 10,
costoUnitario: 350.00,
categoria: "electronica",
};

const producto2: ProductoInventario = {
codigo: "PER-045",
nombre: "Yogurt Entero 1L (Pack)",
stockActual: 45,
stockMinimo: 20,
costoUnitario: 1.50,
categoria: "perecedero",
};

console.log(evaluarInventario(producto1));
console.log("---");
console.log(evaluarInventario(producto2));

// TS detecta si usas una categoría inválida:
// const producto3: ProductoInventario = { ..., categoria: "automotriz" };
// Type '"automotriz"' is not assignable to type 'CategoriaProducto'.