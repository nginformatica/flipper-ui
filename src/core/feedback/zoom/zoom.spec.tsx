import React from 'react'
import { render, screen } from '@testing-library/react'
import { Zoom } from '.'

describe('Zoom', () => {
    it('should render closed', () => {
        render(
            <Zoom in={false}>
                <span>Zoom Text</span>
            </Zoom>
        )
        const element = screen.getByText('Zoom Text')

        expect(element).toHaveProperty('style.visibility', 'hidden')
    })

    it('should render opened', () => {
        render(
            <Zoom in>
                <span>Zoom Text</span>
            </Zoom>
        )

        const element = screen.getByText('Zoom Text')

        expect(element).not.toHaveProperty('style.visibility', 'hidden')
    })

    it('should match snapshot', () => {
        const { container: opened } = render(
            <Zoom in>
                <span>Zoom Text</span>
            </Zoom>
        )

        const { container: closed } = render(
            <Zoom in={false}>
                <span>Zoom Text</span>
            </Zoom>
        )

        expect(opened).toMatchSnapshot()
        expect(closed).toMatchSnapshot()
    })
})
