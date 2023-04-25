import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Progress from '.'

describe('Progress', () => {
    it('should render circular', () => {
        render(<Progress />)

        const progress = screen.getByRole('progressbar')

        expect(progress.classList).toContain('MuiCircularProgress-root')
        expect(progress.firstElementChild?.classList).toContain(
            'MuiCircularProgress-svg'
        )
    })

    it('should render linear', () => {
        render(<Progress linear />)

        const progress = screen.getByRole('progressbar')

        expect(progress.classList).toContain('MuiLinearProgress-root')
        expect(progress.firstElementChild?.classList).toContain(
            'MuiLinearProgress-bar'
        )
    })

    it('should match snapshot', () => {
        const { container: circular } = render(<Progress />)
        const { container: linear } = render(<Progress linear />)

        expect(circular).toMatchSnapshot()
        expect(linear).toMatchSnapshot()
    })
})
