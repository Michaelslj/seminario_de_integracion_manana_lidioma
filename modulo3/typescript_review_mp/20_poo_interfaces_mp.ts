interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class PedidoBodega implements Serializable, Validable {
  constructor(
    public id: string,
    public productos: string[],
    public total: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, productos: this.productos, total: this.total });
  }

  esValido(): boolean {
    return this.productos.length > 0 && this.total > 0;
  }
}

const pedidoBodega = new PedidoBodega("ELEC-P-001", ["Smart TV 55 pulgadas 4K", "Soporte Pared"], 375.00);
console.log(pedidoBodega.esValido());    // true
console.log(pedidoBodega.serializar());
