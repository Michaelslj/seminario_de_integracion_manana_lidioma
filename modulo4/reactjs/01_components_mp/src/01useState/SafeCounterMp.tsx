// src/01useState/SafeCounter.tsx

import { useState } from 'react'

export default function SafeCounter() {
  const [unidades, setUnidades] = useState(0)

  function agregarUnidad() {
    // ❌ Puede fallar si React agrupa renders
    setUnidades(unidades + 1)

    // ✅ Siempre correcto — prev es garantizado el valor actual
    setUnidades((prev) => prev + 1)
  }

  // Ejemplo donde la diferencia importa: agregar 3 unidades seguidas al stock
  function agregarTresUnidades() {
    // ❌ Las tres líneas leen el mismo valor de unidades — resultado: +1
    setUnidades(unidades + 1)
    setUnidades(unidades + 1)
    setUnidades(unidades + 1)

    // ✅ Cada llamada recibe el prev actualizado — resultado: +3
    setUnidades((prev) => prev + 1)
    setUnidades((prev) => prev + 1)
    setUnidades((prev) => prev + 1)
  }

  return (
    <div>
      <p>Unidades en stock: {unidades}</p>
      <button onClick={agregarUnidad}>+1</button>
      <button onClick={agregarTresUnidades}>+3</button>
    </div>
  )
}
