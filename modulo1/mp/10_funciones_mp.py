print("Sistema de Inventario - Funciones")

# Función básica
def mostrar_sistema():
    print("Bienvenido al sistema de inventario")

mostrar_sistema()

# Función con parámetro
def mostrar_producto(nombre):
    print(f"Producto: {nombre}")

mostrar_producto("Laptop Gamer")
mostrar_producto("Mouse RGB")

# Función con return
def calcular_total(precio, cantidad):
    return precio * cantidad

print(calcular_total(1200, 2))

# Parámetros por posición
def registrar_producto(nombre, stock, precio):
    print(f"{nombre}, Stock: {stock}, Precio: {precio}")

registrar_producto("Teclado", 10, 80)

# Parámetros por defecto
def mensaje(nombre, estado="Activo"):
    print(f"{nombre} - {estado}")

mensaje("Laptop")
mensaje("Mouse", "Agotado")

# *args
def sumar_stock(*args):
    return sum(args)

print(sumar_stock(10, 5, 3))

# **kwargs
def crear_producto(**kwargs):
    print(kwargs)

crear_producto(nombre="Laptop", precio=1200, stock=5)

# Función con todo combinado
def configurar_inventario(host, *productos, debug=False, **opciones):
    print(host)
    print(productos)
    print(debug)
    print(opciones)

configurar_inventario("localhost", "Laptop", "Mouse", debug=True, iva=0.12)

# Retornar múltiples valores
def minimo_maximo(valores):
    return min(valores), max(valores)

minimo, maximo = minimo_maximo([10, 20, 30, 5])
print(minimo, maximo)

# Diccionario de análisis
def analizar_stock(valores):
    total = sum(valores)
    n = len(valores)

    return {
        "total": total,
        "promedio": total / n if n > 0 else 0,
        "min": min(valores) if valores else None,
        "max": max(valores) if valores else None,
        "cantidad": n
    }

datos = [10, 5, 8, 20]
stats = analizar_stock(datos)

print(stats)

# Lambda
doble = lambda x: x * 2
suma = lambda a, b: a + b

print(doble(5))
print(suma(3, 4))