
// Concepto puro adaptado a la gestión orientada a objetos de productos en la bodega
class ProductoInventarioBodeg {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  // Método: acción que puede realizar la instancia para reportar el estado en bodega
  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio.toFixed(2)} (${estado})`;
  }
}

const smartTV = new ProductoInventarioBodeg("Smart TV 55 pulgadas 4K", 350.00, true);
const yogurtPack = new ProductoInventarioBodeg("Yogurt Entero 1L (Pack)", 1.50, true);

console.log(smartTV.describir());   // Smart TV 55 pulgadas 4K — $350.00 (disponible)
console.log(yogurtPack.describir()); // Yogurt Entero 1L (Pack) — $1.50 (disponible)