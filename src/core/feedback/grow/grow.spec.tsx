import React from 'react'
import { render, screen } from '@testing-library/react'
import Grow from '.'

describe('Grow', () => {
    it('should render closed', () => {
        render(
            <Grow in={false}>
                <span>Grow Text</span>
            </Grow>
        )
        const element = screen.getByText('Grow Text')
        const parentDiv = element.parentElement

        expect(parentDiv).toHaveProperty('style.visibility', 'hidden')
        expect(parentDiv).toHaveProperty('style.opacity', '0')
    })

    it('should render opened', () => {
        render(
            <Grow in>
                <span>Grow Text</span>
            </Grow>
        )

        const element = screen.getByText('Grow Text')
        const parentDiv = element.parentElement

        expect(parentDiv).not.toHaveProperty('style.visibility', 'hidden')
        expect(parentDiv).toHaveProperty('style.opacity', '1')
    })

    it('should match snapshot', () => {
        const { container: opened } = render(
            <Grow in>
                <span>Grow Text</span>
            </Grow>
        )

        const { container: closed } = render(
            <Grow in={false}>
                <span>Grow Text</span>
            </Grow>
        )

        expect(opened).toMatchSnapshot()
        expect(closed).toMatchSnapshot()
    })
})
