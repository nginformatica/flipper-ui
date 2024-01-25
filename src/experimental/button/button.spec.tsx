import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
    const NAME = 'btnName'
    const LABEL = 'Click Me'

    it('should render', () => {
        render(<Button name={NAME} label={LABEL} />)

        const button = screen.getByText(LABEL)

        expect(button).toBeDefined()
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        render(<Button name={NAME} label={LABEL} onClick={onClick} />)

        const button = screen.getByText(LABEL)

        button.click()

        expect(onClick).toHaveBeenCalled()
    })
})
