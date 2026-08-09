// src/01useState/TaskManager.tsx

import { useState } from 'react'

interface Producto {
  id: number
  nombre: string
  categoria: string
  agotado: boolean
}

export default function TaskManager() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')

  // AGREGAR — spread del array anterior más el nuevo item
  function addTask() {
    if (!categoria.trim()) return
    setProductos((prev) => [
      ...prev,
      { id: Date.now(), nombre: nombre.trim(), categoria: categoria.trim(), agotado: false },
    ])
    setCategoria('')
    setNombre('')
  }
  // ELIMINAR — filter crea un nuevo array sin el elemento
  function removeTask(id: number) {
    setProductos((prev) => prev.filter((producto) => producto.id !== id))
  }

  // ACTUALIZAR — map crea un nuevo array con el elemento modificado
  function toggleTask(id: number) {
    setProductos((prev) =>
      prev.map((producto) =>
        producto.id === id ? { ...producto, agotado: !producto.agotado } : producto
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Producto..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Categoría..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
      </div>

      {productos.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay productos. ¡Agrega uno!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productos.map((producto) => (
          <li
            key={producto.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={producto.agotado}
              onChange={() => toggleTask(producto.id)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: producto.agotado ? 'line-through' : 'none',
                color: producto.agotado ? '#aaa' : '#333',
              }}
            >
              {producto.nombre} — {producto.categoria}
            </span>
            <button
              onClick={() => removeTask(producto.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {productos.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {productos.filter((p) => p.agotado).length} de {productos.length} agotados
        </p>
      )}
    </div>
  )
}
