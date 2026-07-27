// src/03userRef/AutoFocusForm.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm() {
  const nombreRef = useRef<HTMLInputElement>(null)
  const precioRef = useRef<HTMLInputElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    nombreRef.current?.focus()
  }, [])

  function handleNombreKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al siguiente campo con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      precioRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={nombreRef}
        placeholder="Nombre del producto"
        onKeyDown={handleNombreKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={precioRef}
        type="number"
        placeholder="Precio"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Guardar producto
      </button>
    </form>
  )
}
