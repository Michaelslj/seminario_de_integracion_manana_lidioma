class LoteBodegaFinanciero {
  readonly codigoLote: string;     // no cambia tras el registro inicial en bodega
  public responsable: string;      // visible desde fuera
  private valorTotalStock: number; // solo accesible dentro de la clase para evitar modificaciones indebidas
  protected monedaLocal: string;   // accesible también en subclases

  constructor(codigoLote: string, responsable: string, valorInicial: number) {
    this.codigoLote = codigoLote;
    this.responsable = responsable;
    this.valorTotalStock = valorInicial;
    this.monedaLocal = "USD";
  }

  // Método público que expone el valor del stock de forma controlada
  obtenerValorTotal(): number {
    return this.valorTotalStock;
  }

  registrarIngresoMercancia(monto: number): void {
    if (monto <= 0) throw new Error("Monto de ingreso inválido");
    this.valorTotalStock += monto;
  }
}

const loteElectronica = new LoteBodegaFinanciero("ELEC-LOTE-01", "Carlos Pérez", 2800.00);
console.log(loteElectronica.responsable);       // Carlos Pérez
console.log(loteElectronica.codigoLote);       // ELEC-LOTE-01
console.log(loteElectronica.obtenerValorTotal()); // 2800
loteElectronica.registrarIngresoMercancia(1200.00);
console.log(loteElectronica.obtenerValorTotal()); // 4000

// loteElectronica.valorTotalStock = 9999;  // Error: 'valorTotalStock' is private
// loteElectronica.codigoLote = "OTRO";     // Error: 'codigoLote' is readonly