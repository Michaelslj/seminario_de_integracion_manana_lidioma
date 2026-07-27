// src/02useEffect/FetchUser.tsx

import { useState, useEffect } from 'react'

interface Producto {
  id:          number
  title:       string
  price:       number
  category:    string
  description: string
}

export default function FetchUser() {
  const [productoId, setProductoId] = useState(1)
  const [producto,   setProducto]   = useState<Producto | null>(null)
  const [loading,    setLoading]    = useState(false)
  const [error,      setError]      = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchProducto() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productoId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Producto = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setProducto(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducto()

    return () => { cancelled = true }
  }, [productoId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setProductoId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: productoId === id ? '#0070f3' : '#fff',
              color:      productoId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: productoId === id ? 600 : 400,
            }}
          >
            Producto {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {producto && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{producto.title}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            {producto.category}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            ${producto.price}
          </p>
        </div>
      )}
    </div>
  )
}
