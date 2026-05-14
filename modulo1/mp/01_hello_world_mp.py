print("Sistema de Inventario")

stock = 15
producto = "Laptop Gamer"

print(f"El producto {producto} tiene {stock} unidades disponibles.")

print("Producto", "Categoría", "Precio")

precio = 1200.99

print(
    producto,
    stock,
    precio,
    sep=" | "
)

print(producto, end=" | ")
print(stock, end=" | ")
print(precio, end=" | ")

print(f"{precio:.2f}")

codigo = 20260001

print(f"{codigo:,}")