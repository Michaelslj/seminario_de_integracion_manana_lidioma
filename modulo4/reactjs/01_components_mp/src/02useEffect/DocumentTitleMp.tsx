// src/02useEffect/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
  useEffect(() => {
    document.title = 'Sistema de Gestión de Inventario'

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      Bienvenido al sistema de gestion de inventario.
    </p>
  )
}
