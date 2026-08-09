abstract class ItemBodegaBase {
  abstract calcularValorTotal(): number; // sin implementación — las subclases DEBEN implementarlo
  abstract calcularCostoAlmacenaje(): number;

  // Los métodos concretos SÍ tienen implementación para reportar métricas generales de inventario
  describirItem(): string {
    return (
      `Valor Total Stock: $${this.calcularValorTotal().toFixed(2)} | ` +
      `Costo de Almacenaje: $${this.calcularCostoAlmacenaje().toFixed(2)}`
    );
  }
}

class ProductoElectronicoBodega extends ItemBodegaBase {
  constructor(private stock: number, private costoUnitario: number) {
    super();
  }

  override calcularValorTotal(): number {
    return this.stock * this.costoUnitario;
  }

  override calcularCostoAlmacenaje(): number {
    // 5% de costo de mantenimiento por unidad para electrónica
    return this.calcularValorTotal() * 0.05;
  }
}

class ProductoPerecederoBodegaBase extends ItemBodegaBase {
  constructor(private stock: number, private costoUnitario: number) {
    super();
  }

  override calcularValorTotal(): number {
    return this.stock * this.costoUnitario;
  }

  override calcularCostoAlmacenaje(): number {
    // 8% de costo de mantenimiento por riesgo/refrigeración para perecederos
    return this.calcularValorTotal() * 0.08;
  }
}

// const itemBase = new ItemBodegaBase(); // Error: Cannot create an instance of an abstract class.

const smartTVBodega = new ProductoElectronicoBodega(8, 350.00);
const yogurtBodega = new ProductoPerecederoBodegaBase(45, 1.50);

console.log(smartTVBodega.describirItem()); // Valor Total Stock: $2800.00 | Costo de Almacenaje: $140.00
console.log(yogurtBodega.describirItem());  // Valor Total Stock: $67.50 | Costo de Almacenaje: $5.40