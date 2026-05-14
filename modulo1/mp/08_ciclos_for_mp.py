print("Sistema de Inventario - Recorridos")

productos = ["Laptop", "Mouse", "Teclado"]

print("Recorrer lista de productos")
for producto in productos:
    print(producto)

print("Recorrer caracteres")
for letra in "inventario":
    print(letra)

print("Recorrer rangos")
for i in range(1, 6):
    print(i)

print("Recorrer con paso")
for i in range(1, 10, 2):
    print(i)

print("Enumerar productos")
for i, producto in enumerate(productos):
    print(i, producto)

print("Dos listas a la vez")
nombres = ["Laptop", "Mouse"]
stocks = [10, 5]

for nombre, stock in zip(nombres, stocks):
    print(nombre, stock)

print("Control del ciclo")
for i in range(10):
    if i == 6:
        break
    print(i)

print("Continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("For anidado")
for i in range(3):
    for j in range(2):
        print(i, j)

print("List comprehension")
cuadrados = [x**2 for x in range(5)]
print(cuadrados)

ventas = [120, 80, 200, 50, 300]

ventas_validas = 0
bono_total = 0

for v in ventas:
    if v > 100:
        ventas_validas += 1

        if v > 250:
            print(f"Venta {v}: Bono alto")
            bono_total += 30
        else:
            print(f"Venta {v}: Bono normal")
            bono_total += 10

print("Total ventas válidas:", ventas_validas)
print("Bono acumulado:", bono_total)