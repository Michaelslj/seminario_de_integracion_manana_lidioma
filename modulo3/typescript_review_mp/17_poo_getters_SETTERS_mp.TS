class ControlStockProducto {
  private _stockActual: number;

  constructor(stockInicial: number) {
    if (stockInicial < 0) throw new Error("El stock inicial no puede ser negativo");
    this._stockActual = stockInicial;
  }

  get stockActual(): number {
    return this._stockActual;
  }

  set stockActual(valor: number) {
    if (valor < 0) throw new Error("El stock no puede ser negativo");
    this._stockActual = valor;
  }

  get requiereReabastecimiento(): boolean {
    return this._stockActual <= 10; // Alerta si el stock es menor o igual a 10 unidades
  }
}

const itemSmartTV = new ControlStockProducto(8);
console.log(itemSmartTV.stockActual);             // 8   ← usa el getter
console.log(itemSmartTV.requiereReabastecimiento); // true

itemSmartTV.stockActual = 25;                     // usa el setter
console.log(itemSmartTV.stockActual);             // 25
console.log(itemSmartTV.requiereReabastecimiento); // false

// itemSmartTV.stockActual = -5;  // Error: El stock no puede ser negativo