
antiguedad=int(input("Cuantos años trabaja aqui?: "))    
años=int(input("Ingrese los años: "))
salario=int(input("Ingrese su salario: "))
if(antiguedad<1):
    print("No cumple con los años")
    if(años>=8):
        if (salario>=1000):
            print("Bono de $100")
        else: 
            print("Bono de $200")
    else: 
        print("No recibe bono no cumple con los años")
else: 
    print("Si cumple")