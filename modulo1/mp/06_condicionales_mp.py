antiguedad = int(input("Años en la empresa: "))
ventas = int(input("Ingrese número de ventas: "))
salario = int(input("Ingrese el salario base: "))

if antiguedad < 1:
    print("No cumple con antigüedad mínima")

    if ventas >= 8:
        if salario >= 1000:
            print("Bono aplicado: $100")
        else:
            print("Bono aplicado: $200")
    else:
        print("No recibe bono por bajas ventas")

else:
    print("Empleado con antigüedad suficiente")
    print("Acceso a beneficios activado")