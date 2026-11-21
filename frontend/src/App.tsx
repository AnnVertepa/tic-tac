import { Link, Route, Routes } from 'react-router-dom'

import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { Rules } from './pages/Rules'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Главная</Link> | <Link to="/game">Игра</Link> | <Link to="/rules">Правила</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  )
}