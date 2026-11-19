import { Button, GameBoard, GameControls } from '@my-app/ui-library'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Главная</Link> | <Link to="/game">Игра</Link> | <Link to="/rules">Правила</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <h1>Добро пожаловать в игру :)</h1>
            <p>Главная страница игры "Крестики-нолики"</p>
            
            <Link to="/game">
              <Button>Начать игру!</Button>
            </Link>
            
            <Link to="/rules">
              <Button>Правила</Button>
            </Link>
          </div>
        } />
        
        <Route path="/game" element={
          <div>
            <h1>Игра</h1>
            <GameBoard />
            <GameControls />
            <Button>Сделать ход</Button>
          </div>
        } />

        <Route path="/rules" element={
          <div>
            <h1>Правила игры</h1>
            <p>Крестики-нолики играются на поле 3х3. Побеждает тот, кто первым выстроит три своих знака в ряд - по горизонтали, вертикали или диагонали</p>
            
            <Link to="/game">
              <Button>Начать игру!</Button>
            </Link>
          </div>
        } />
      </Routes>
    </div>
  )
}