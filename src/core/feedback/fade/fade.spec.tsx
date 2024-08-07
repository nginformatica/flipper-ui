import React from 'react'
import { render, screen } from '@testing-library/react'
import Fade from '.'

describe('Fade', () => {
    it('should render closed', () => {
        render(
            <Fade in={false}>
                <span>Fade Text</span>
            </Fade>
        )

        const element = screen.getByText('Fade Text')
        const parentDiv = element.parentElement

        expect(parentDiv).toHaveProperty('style.visibility', 'hidden')
        expect(parentDiv).toHaveProperty('style.opacity', '0')
    })

    it('should render opened', () => {
        render(
            <Fade in>
                <span>Fade Text</span>
            </Fade>
        )

        const element = screen.getByText('Fade Text')
        const parentDiv = element.parentElement

        expect(parentDiv).not.toHaveProperty('style.visibility', 'hidden')
        expect(parentDiv).toHaveProperty('style.opacity', '1')
    })

    it('should match snapshot', () => {
        const { container: opened } = render(
            <Fade in>
                <span>Fade Text</span>
            </Fade>
        )

        const { container: closed } = render(
            <Fade in={false}>
                <span>Fade Text</span>
            </Fade>
        )

        expect(opened).toMatchSnapshot()
        expect(closed).toMatchSnapshot()
    })
})
