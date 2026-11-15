import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  test('рендерит текст кнопки', () => {
    render(<Button>Тест</Button>)
    expect(screen.getByText('Тест')).toBeInTheDocument()
  })

  test('вызывает onClick при клике', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Тест</Button>)
    fireEvent.click(screen.getByText('Тест'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})