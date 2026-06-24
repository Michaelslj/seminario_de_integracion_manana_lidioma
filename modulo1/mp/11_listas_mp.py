print("Sistema de Inventario - Listas")

print("Crear listas")
vacia = []
print(vacia)

productos = ["Laptop", "Mouse", "Teclado", "Monitor"]
print(productos)

mixta = [1, "Inventario", True, None, 99.9]
print(mixta)

anidada = ["PC", ["RAM", "SSD", [8, 16]], "GPU"]
print(anidada)

print("Acceso a elementos")
print(productos[0])
print(productos[-1])
print(productos[1:3])
print(productos[::-1])

print("CRUD de lista")
inventario = ["Laptop", "Mouse", "Teclado"]

print(inventario)

inventario.append("Audífonos")
print(inventario)

inventario.insert(1, "Webcam")
print(inventario)

inventario.extend(["Impresora", "Escáner"])
print(inventario)

inventario[0] = "Laptop Gamer"
print(inventario)

inventario.remove("Mouse")
print(inventario)

eliminado = inventario.pop() 
print(inventario)

eliminado = inventario.pop(0) 
print(inventario)

del inventario[2] 
print(inventario)

print("Buscar en lista")
print("Webcam" in inventario)
print(inventario.index("Webcam")) 
print(inventario.count("Webcam"))

print("Ordenar listas")
numeros = [5, 2, 9, 1, 7, 3]

print(numeros)

numeros.sort()
print(numeros)

numeros.sort(reverse=True)
print(numeros)

ordenada = sorted(numeros)
print(numeros)
print(ordenada)