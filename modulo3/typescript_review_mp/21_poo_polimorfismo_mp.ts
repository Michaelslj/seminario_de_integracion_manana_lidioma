class ItemAlmacenGeneral {
  nombre(): string { return "Item General de Bodega"; }
  calcularCostoTotal(): number { return 0; }
}

class ProductoElectronicoBodegaPoly extends ItemAlmacenGeneral {
  constructor(private stock: number, private costoUnitario: number) { super(); }
  override nombre(): string { return "Smart TV 55 pulgadas 4K"; }
  override calcularCostoTotal(): number { return this.stock * this.costoUnitario; }
}

class ProductoPerecederoBodegaPoly extends ItemAlmacenGeneral {
  constructor(private stock: number, private costoUnitario: number) { super(); }
  override nombre(): string { return "Yogurt Entero 1L (Pack)"; }
  override calcularCostoTotal(): number { return this.stock * this.costoUnitario; }
}

class ProductoHogarBodegaPoly extends ItemAlmacenGeneral {
  constructor(private stock: number, private costoUnitario: number) { super(); }
  override nombre(): string { return "Escritorio de Madera"; }
  override calcularCostoTotal(): number { return this.stock * this.costoUnitario; }
}

// Array de tipo base — el polimorfismo en acción para procesar múltiples tipos de inventario en la bodega
const itemsBodega: ItemAlmacenGeneral[] = [
  new ProductoElectronicoBodegaPoly(8, 350.00),
  new ProductoPerecederoBodegaPoly(45, 1.50),
  new ProductoHogarBodegaPoly(12, 120.00),
];

for (const item of itemsBodega) {
  // TypeScript llama la versión correcta de calcularCostoTotal() en cada iteración
  console.log(`${item.nombre()}: costo total en stock = $${item.calcularCostoTotal().toFixed(2)}`);
}
