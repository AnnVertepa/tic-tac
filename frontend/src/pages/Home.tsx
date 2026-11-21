import { Button } from '@my-app/ui-library'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
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
  )
}