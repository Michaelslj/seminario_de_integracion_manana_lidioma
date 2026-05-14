print("Match-case")
comando = input("Compando proceso iniciar/parar/reiniciar: ")
match comando: 
    case "iniciar":
        print("Sistema iniciado")
    case "parar":
        print("Deteniendose")
    case "reiniciar":
        print("Reiniciando el sistema")
    case _: 
        print(f"comando '{comando}' no encontrado")
        
print("match con condiciones")
numero=7
match numero: 
    case n if n<0: 
        print(f"{n} es negativo")
    case 0:
        print("Es cero")
    case n if n%2==0:
        print(f"{n} es par")
    case n: 
        print(f"{n} es positivo e impar")