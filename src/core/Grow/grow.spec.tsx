import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Grow from '.'

describe('Fade', () => {
    it('should render closed', () => {
        render(
            <Grow in={false}>
                <span>Grow Text</span>
            </Grow>
        )
        const element = screen.getByText('Grow Text')

        expect(element).toHaveProperty('style.visibility', 'hidden')
        expect(element).toHaveProperty('style.opacity', '0')
    })

    it('should render opened', () => {
        render(
            <Grow in>
                <span>Grow Text</span>
            </Grow>
        )

        const element = screen.getByText('Grow Text')

        expect(element).not.toHaveProperty('style.visibility', 'hidden')
        expect(element).toHaveProperty('style.opacity', '1')
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
