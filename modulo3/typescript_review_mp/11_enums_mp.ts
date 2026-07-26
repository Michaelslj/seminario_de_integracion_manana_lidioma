
enum ZonaBodega {
  Recepcion, // 0
  Almacenamiento, // 1
  Empaque,    // 2
  Despacho,   // 3
}

const zonaActual: ZonaBodega = ZonaBodega.Almacenamiento;
console.log(zonaActual);             
console.log(ZonaBodega[1]);           

enum CodigoErrorInventario {
  StockInsuficiente = 400,
  ProductoNoEncontrado = 404,
  FallaSistemaBodega = 500,
}

enum NivelAccesoBodega {
  Supervisor = "SUPERVISOR",
  Operario = "OPERARIO",
  Auditor = "AUDITOR",
}

const rolUsuarioBodega: NivelAccesoBodega = NivelAccesoBodega.Operario;
console.log(rolUsuarioBodega); 

type EstadoInventarioPedido = "pendiente" | "procesando" | "completado" | "error";
type PrioridadReabastecimiento = "baja" | "media" | "alta";

function procesarReabastecimiento(idProducto: number, estado: EstadoInventarioPedido): void {
  console.log(`Reabastecimiento de producto #${idProducto}: ${estado}`);
}

procesarReabastecimiento(1, "procesando"); 
