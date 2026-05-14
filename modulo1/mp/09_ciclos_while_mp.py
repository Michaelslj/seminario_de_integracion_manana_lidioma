print("Sistema de Inventario - Acceso")

clave_sistema = 1234
intento = int(input("Ingrese clave de acceso: "))

while intento != clave_sistema:
    print("Clave incorrecta")
    intento = int(input("Ingrese clave de acceso: "))

print("Acceso permitido al sistema")