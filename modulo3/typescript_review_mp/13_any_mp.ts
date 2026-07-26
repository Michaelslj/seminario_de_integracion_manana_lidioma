// Desactiva el chequeo de tipos al procesar datos legados de una báscula antigua de la bodega.
let lecturaBalanzaAntigua: any = "150kg";
lecturaBalanzaAntigua = 145.50;      // ok, any acepta cualquier valor
lecturaBalanzaAntigua = true;        // ok
// lecturaBalanzaAntigua.metodoInexistenteEnBalanza(); // NO da error en compilación, pero fallaría en runtime

// ─── unknown ───────────────────────────────────────────────────────────────
// Versión SEGURA para procesar respuestas de APIs externas de proveedores de logística o JSONs de pedidos.
let respuestaApiProveedor: unknown = '{"sku": "ELEC-001", "stock": 10}';
respuestaApiProveedor = { sku: "ELEC-001", stock: 8 }; // ok, acepta cualquier valor

// console.log(respuestaApiProveedor.stock); // Error: Object is of type 'unknown'
if (typeof respuestaApiProveedor === "object" && respuestaApiProveedor !== null && "stock" in respuestaApiProveedor) {
  console.log("Stock recibido de API externa de forma segura."); // ok: TypeScript narrowiza el tipo aquí
}

// ─── never ─────────────────────────────────────────────────────────────────
// Representa algo que NUNCA ocurre en la bodega: una excepción crítica de stock o control exhaustivo de categorías.
function lanzarErrorInventarioCritico(mensaje: string): never {
  throw new Error(`[SISTEMA BODEGA] Error crítico: ${mensaje}`); // nunca devuelve un valor
}

function verificarExhaustividadCategoria(categoria: never): never {
  throw new Error(`Categoría de producto no manejada en el inventario: ${String(categoria)}`);
}