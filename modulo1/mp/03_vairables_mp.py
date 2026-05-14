# String, int, float, bool, None

producto = "Laptop Gamer"
stock = 10
precio = 1200.50
disponible = True
categoria = None

print(type(producto))
print(type(stock))
print(type(precio))
print(type(disponible))
print(type(categoria))

# Asignar varias variables
id_producto, cantidad, codigo = 1, 5, 1001

print(id_producto)
print(cantidad)
print(codigo)

# Mismo valor
a = b = c = 0

print(a)
print(b)
print(c)

# Intercambiar valores
stock1, stock2 = 10, 20

print(stock1, stock2)

stock1, stock2 = stock2, stock1

print(stock1, stock2)

# Convenciones
nombre_producto = "Mouse RGB"

MAX_STOCK = 100

_variable_privada = "Interno"

# Enteros
pequeño = 15
negativo = -5
grande = 1_000_000
enorme = 2 ** 20

print(pequeño)
print(negativo)
print(grande)
print(enorme)

# Bases numéricas
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF

print(binario, octal, hexadecimal)

# Conversiones
print(bin(255))
print(oct(255))
print(hex(255))