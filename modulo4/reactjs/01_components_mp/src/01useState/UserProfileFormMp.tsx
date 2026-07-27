// src/01useState/UserProfileForm.tsx

import { useState } from 'react'

interface ProductoProfile {
  nombre: string
  categoria: string
  precio: number
  stock: number
}

export default function UserProfileForm() {
  const [producto, setProducto] = useState<ProductoProfile>({
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0,
  })

  function handleChange(field: keyof ProductoProfile, value: string | number) {
    setProducto((prev) => ({
      ...prev,        // copia todos los campos actuales
      [field]: value, // sobreescribe solo el campo que cambió
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre del producto"
        value={producto.nombre}
        onChange={(e) => handleChange('nombre', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Categoría"
        value={producto.categoria}
        onChange={(e) => handleChange('categoria', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Precio"
        type="number"
        value={producto.precio}
        onChange={(e) => handleChange('precio', Number(e.target.value))}
        style={inputStyle}
      />
      <input
        placeholder="Stock"
        type="number"
        value={producto.stock}
        onChange={(e) => handleChange('stock', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{producto.nombre || '—'}</strong> · {producto.categoria || '—'} · ${producto.precio || 0} · Stock: {producto.stock || 0}
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
