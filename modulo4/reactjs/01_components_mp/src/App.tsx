// src/App.tsx

import DigitalCounter from "./01useState/DigitalCounterMp"
import SafeCounter from "./01useState/SafeCounterMp"
import TaskManager from "./01useState/TaskManagerMp"
import UserProfileForm from "./01useState/UserProfileFormMp"
import DocumentTitle from "./02useEffect/DocumentTitleMp"
import FetchUser from "./02useEffect/FetchUserMp"
import FetchUsers from "./02useEffect/FetchUsersMp"
import AutoFocusForm from "./03userRef/AutoFocusFormMp"
import InlineEditor from "./03userRef/InlineEditorMp"


// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda para navegar entre componentes.            │
// │   1  DigitalCounter    — useState + props (stock disponible)     │
// │   2  SafeCounter       — useState funcional (unidades en stock)  │
// │   3  TaskManager       — useState con array (gestor de productos)│
// │   4  UserProfileForm   — useState con objeto (ficha de producto) │
// │   5  DocumentTitle     — useEffect + cleanup                     │
// │   6  FetchUser         — useEffect + fetch (producto por id)     │
// │   7  FetchUsers        — useEffect + fetch (lista de productos)  │
// │   8  AutoFocusForm     — useRef (autofocus alta de producto)     │
// │   9  InlineEditor      — useRef (edición inline sin re-render)   │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 5

export default function App() {
  const content =
    PASO === 1 ? <DigitalCounter initialValue={10} step={5} label="Stock de servidores" /> :
    PASO === 2 ? <SafeCounter /> :
    PASO === 3 ? <TaskManager /> :
    PASO === 4 ? <UserProfileForm /> :
    PASO === 5 ? <DocumentTitle /> :
    PASO === 6 ? <FetchUser /> :
    PASO === 7 ? <FetchUsers /> :
    PASO === 8 ? <AutoFocusForm /> :
    PASO === 9 ? <InlineEditor /> :
    <p style={{ color: 'rgb(15, 15, 15)' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}