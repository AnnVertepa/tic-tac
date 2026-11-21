import { Button, GameBoard, GameControls } from '@my-app/ui-library'

export const Game = () => {
  return (
    <div>
      <h1>Игра</h1>
      <GameBoard />
      <GameControls />
      <Button>Сделать ход</Button>
    </div>
  )
}