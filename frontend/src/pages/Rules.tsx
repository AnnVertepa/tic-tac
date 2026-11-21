import { Button } from '@my-app/ui-library'
import { Link } from 'react-router-dom'

export const Rules = () => {
  return (
    <div>
      <h1>Правила игры</h1>
      <p>Крестики-нолики играются на поле 3х3. Побеждает тот, кто первым выстроит три своих знака в ряд - по горизонтали, вертикали или диагонали</p>
      <Link to="/game">
        <Button>Начать игру!</Button>
      </Link>
    </div>
  )
}