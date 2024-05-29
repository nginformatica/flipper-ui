import React from 'react'
import { render, screen } from '@testing-library/react'
import AddButton from '.'

describe('Add Button', () => {
    it('should render', () => {
        render(<AddButton name='btnName' label='Click Me' />)

        const button = screen.getByText('Click Me')

        expect(button).toBeDefined()
    })

    it('should call onClick', () => {
        const onClick = jest.fn()

        render(<AddButton name='btnName' label='Click Me' onClick={onClick} />)

        const button = screen.getByText('Click Me')

        button.click()

        expect(onClick).toHaveBeenCalled()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <AddButton name='btnName' label='Click Me' />
        )

        expect(container).toMatchSnapshot()
    })
})
