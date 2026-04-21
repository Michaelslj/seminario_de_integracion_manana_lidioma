
    
    
contraseña = 1234
numero = int(input("Ingrese contraseña: "))

while numero != contraseña:
    print("Contraseña incorrecta")
    numero = int(input("Ingrese contraseña: "))

print("Acceso permitido")