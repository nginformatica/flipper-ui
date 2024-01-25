import * as React from 'react'
import { render, screen } from '@testing-library/react'
import RadioGroup from '@/test/mocks/radio-group-mock'

describe('RadioGroup', () => {
    it('should render', () => {
        render(
            <RadioGroup
                radioGroupProps={{
                    options: [
                        {
                            label: 'First option',
                            value: 'first'
                        },
                        {
                            label: 'Second Option',
                            value: 'second'
                        }
                    ]
                }}
            />
        )

        const container = screen.getByTestId('radio-group-container')
        const firstOption = screen.getByText('First option')
        const secondOption = screen.getByText('Second Option')

        expect(container).toBeDefined()
        expect(firstOption).toBeDefined()
        expect(secondOption).toBeDefined()
    })

    it('should render with no options', () => {
        render(<RadioGroup />)
        const container = screen.getByTestId('radio-group-container')

        expect(container).toBeDefined()
    })

    it('should render with spacing', () => {
        render(
            <RadioGroup
                radioGroupProps={{
                    spacing: 'equal',
                    options: [
                        {
                            label: 'First option',
                            value: 'first'
                        },
                        {
                            label: 'Second Option',
                            value: 'second'
                        }
                    ]
                }}
            />
        )

        const container = screen.getByRole('radiogroup').firstElementChild

        expect(container).toHaveProperty('style.flex', '1')
    })
})
