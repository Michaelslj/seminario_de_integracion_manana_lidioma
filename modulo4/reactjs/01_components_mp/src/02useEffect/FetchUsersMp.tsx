// src/02useEffect/FetchUsers.tsx

import { useState, useEffect } from 'react'

interface Producto {
  id:       number
  title:    string
  price:    number
  category: string
  image:    string
}

export default function FetchUsers() {
  const [productos, setProductos] = useState<Producto[] | null>(null)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProductos() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://fakestoreapi.com/products`)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Producto[] = await res.json()

        if (!cancelled) setProductos(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProductos()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {productos && !loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {productos.map((producto) => (
            <div key={producto.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{producto.title}</p>
              <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
                {producto.category}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                ${producto.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
