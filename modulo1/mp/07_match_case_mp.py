print("Sistema de Inventario - Acciones")

comando = input("Ingrese acción (agregar/quitar/listar/salir): ")

match comando:

    case "agregar":
        print("Producto agregado al inventario")

    case "quitar":
        print("Producto eliminado del inventario")

    case "listar":
        print("Mostrando inventario...")

    case "salir":
        print("Cerrando sistema")

    case _:
        print(f"Comando '{comando}' no reconocido")


print("\nClasificación de stock")

stock = 7

match stock:

    case n if n < 0:
        print("Stock inválido")

    case 0:
        print("Sin stock")

    case n if n <= 5:
        print("Stock bajo")

    case n if n <= 20:
        print("Stock normal")

    case _:
        print("Stock alto")