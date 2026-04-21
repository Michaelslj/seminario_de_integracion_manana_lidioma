print("Ciclo for")
frutas=["manzana", "banana", "pera"]
for fruta in frutas: 
    print(fruta)
print("Recorrer palabras")
for letra in "frutas": 
    print(letra)
    
print("Recorrer rangos")
for i in range(1,6): 
    print(i)

print("Recorrer rangos")
for i in range(1,10,2): 
    print(i)
    
print("Enuemrar listas")
for i, fruta in enumerate(frutas): 
    print(i, fruta)

print("Dos listas a la vez")
nombres=["Ana", "Luis"]
edades=[20,25]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)
    
print("Control del ciclo")
for i in range(10):
    if i==6:
        break 
    print(i)
print("Continue")
for i in range(5):
    if i==2:
        continue
    print(i)
    
print("for anidado")
for i in range(3): 
    for j in range(2):
        print(i,j)
print("Lista comprehension forma corta")
cuadrados = [x**2 for x in range(5)]
print(cuadrados)



ventas = [120, 80, 200, 50, 300]

ventas_validas = 0
bono_total = 0

for v in ventas:
    if v > 100: 
        ventas_validas += 1
        
        if v > 250:
            print(f"Venta {v}: Bono de 30")
            bono_total += 30
        else:
            print(f"Venta {v}: Bono de 10")
            bono_total += 10

print("Total ventas válidas:", ventas_validas)
print("Bono acumulado:", bono_total)