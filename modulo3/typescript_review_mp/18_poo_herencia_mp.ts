class ItemAlmacen {
  constructor(public nombre: string) {}

  reportarEstado(): string {
    return `El item ${this.nombre} se encuentra registrado en el sistema general.`;
  }
}

class ProductoPerecederoBodega extends ItemAlmacen {
  constructor(nombre: string, public diasCaducidad: number) {
    super(nombre); // llama al constructor del padre
  }

  override reportarEstado(): string {
    return `Producto perecedero ${this.nombre} — Días restantes para caducidad: ${this.diasCaducidad} días.`;
  }

  verificarRefrigeracion(): string {
    return `El producto ${this.nombre} requiere control estricto de cadena de frío.`;
  }
}

const itemGenerico = new ItemAlmacen("Estantería metálica");
const yogurtLote = new ProductoPerecederoBodega("Yogurt Entero 1L (Pack)", 14);

console.log(itemGenerico.reportarEstado());       // El item Estantería metálica se encuentra registrado en el sistema general.
console.log(yogurtLote.reportarEstado());          // Producto perecedero Yogurt Entero 1L (Pack) — Días restantes para caducidad: 14 días.
console.log(yogurtLote.verificarRefrigeracion());  // El producto Yogurt Entero 1L (Pack) requiere control estricto de cadena de frío.
console.log(yogurtLote.diasCaducidad);             // 14