// src/03userRef/InlineEditor.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const nombreRef = useRef<HTMLInputElement>(null)
  const stockRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe algo y guarda')

  function handleSave() {
    const value1 = nombreRef.current?.value.trim() ?? ''
    const value2 = stockRef.current?.value.trim() ?? ''

    const text1 = value1 === '' ? '(vacío)' : value1
    const text2 = value2 === '' ? '(vacío)' : value2

    setSaved(`${text1} | Stock: ${text2}`)
  }

  function handleClear() {
    if (nombreRef.current) nombreRef.current.value = ''
    if (stockRef.current) stockRef.current.value = ''
    nombreRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>

      <input
        ref={nombreRef}
        defaultValue=""
        placeholder="Nombre del producto (sin causar re-renders)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={stockRef}
        defaultValue=""
        placeholder="Cantidad en stock..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar todo
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
