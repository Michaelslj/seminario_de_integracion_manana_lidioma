type PrioridadIncidenteInventario = "baja" | "media" | "alta" | "critica";

interface IncidenteInventario {
  id: number;
  titulo: string;
  prioridad: PrioridadIncidenteInventario;
  resuelto: boolean;
}

function etiquetarIncidenteInventario(i: IncidenteInventario): string {
  const prefijos: Record<PrioridadIncidenteInventario, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };
  const estado = i.resuelto ? "✅" : "⏳";
  return `${estado} ${prefijos[i.prioridad]} [SKU-#${i.id}] ${i.titulo}`;
}

const incidentesBodega: IncidenteInventario[] = [
  { id: 1, titulo: "Diferencia leve de stock en pasillo 2", prioridad: "baja",    resuelto: true  },
  { id: 2, titulo: "Quiebre de stock en Smart TV 55'",     prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Temperatura alta en zona de perecederos", prioridad: "media", resuelto: false },
];

for (const inc of incidentesBodega) {
  console.log(etiquetarIncidenteInventario(inc));
}