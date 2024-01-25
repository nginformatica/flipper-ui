import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Slide } from '.'

describe('Slide', () => {
    it('should render closed', () => {
        render(
            <Slide direction='left' in={false}>
                <span>Slide Text</span>
            </Slide>
        )
        const element = screen.getByText('Slide Text')

        expect(element).toHaveProperty('style.visibility', 'hidden')
    })

    it('should render opened', () => {
        render(
            <Slide in direction='left'>
                <span>Slide Text</span>
            </Slide>
        )

        const element = screen.getByText('Slide Text')

        expect(element).not.toHaveProperty('style.visibility', 'hidden')
    })

    it('should match snapshot', () => {
        const { container: opened } = render(
            <Slide in direction='left'>
                <span>Slide Text</span>
            </Slide>
        )

        const { container: closed } = render(
            <Slide direction='left' in={false}>
                <span>Slide Text</span>
            </Slide>
        )

        expect(opened).toMatchSnapshot()
        expect(closed).toMatchSnapshot()
    })
})
