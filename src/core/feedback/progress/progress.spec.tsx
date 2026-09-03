import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
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

    it('should not wrap the bar when no label is informed', () => {
        const { container } = render(<Progress linear />)

        expect(container.firstElementChild).toBe(
            screen.getByRole('progressbar')
        )
    })

    it('should not wrap the ring when no label is informed', () => {
        const { container } = render(<Progress />)

        expect(container.firstElementChild).toBe(
            screen.getByRole('progressbar')
        )
    })

    it('should add no aria attributes without a label or an ariaLabel', () => {
        render(<Progress linear variant='determinate' value={72} />)

        const bar = screen.getByRole('progressbar')

        expect(bar).not.toHaveAttribute('aria-label')
        expect(bar).not.toHaveAttribute('aria-labelledby')
        expect(bar).not.toHaveAttribute('aria-valuetext')
    })

    it('should keep the color props working with no sx informed', () => {
        render(
            <Progress
                linear
                variant='determinate'
                value={50}
                primaryColor='rgb(1, 2, 3)'
                barPrimaryColor='rgb(4, 5, 6)'
            />
        )

        const bar = screen.getByRole('progressbar')
        const fill = bar.querySelector('.MuiLinearProgress-barColorPrimary')

        expect(getComputedStyle(bar).backgroundColor).toBe('rgb(1, 2, 3)')
        expect(getComputedStyle(fill as Element).backgroundColor).toBe(
            'rgb(4, 5, 6)'
        )
    })

    it('should render the label beside the linear bar', () => {
        render(<Progress linear variant='determinate' value={72} label='72%' />)

        const bar = screen.getByRole('progressbar')
        const label = screen.getByText('72%')

        expect(label.parentElement).toBe(bar.parentElement)
        expect(getComputedStyle(bar).flex).toBe('1 1 0%')
    })

    it('should name the bar through the label', () => {
        render(<Progress linear variant='determinate' value={72} label='72%' />)

        const bar = screen.getByRole('progressbar')

        expect(bar).toHaveAccessibleName('72%')
        expect(bar).toHaveAttribute('aria-valuetext', '72%')
    })

    it('should let ariaLabel override the label as the name', () => {
        render(
            <Progress
                linear
                variant='determinate'
                value={72}
                label='72%'
                ariaLabel='Próxima troca'
            />
        )

        const bar = screen.getByRole('progressbar')

        expect(bar).toHaveAccessibleName('Próxima troca')
        expect(bar).not.toHaveAttribute('aria-labelledby')
        expect(screen.getByText('72%')).toBeInTheDocument()
    })

    it('should name a bar that carries no label', () => {
        render(
            <Progress
                linear
                variant='determinate'
                value={72}
                ariaLabel='Próxima troca'
            />
        )

        expect(screen.getByRole('progressbar')).toHaveAccessibleName(
            'Próxima troca'
        )
    })

    it('should apply the thickness to the linear bar', () => {
        render(<Progress linear thickness={6} />)

        expect(getComputedStyle(screen.getByRole('progressbar')).height).toBe(
            '6px'
        )
    })

    it('should round the linear bar and clip its fill', () => {
        render(<Progress linear thickness={6} borderRadius='3px' />)

        const bar = screen.getByRole('progressbar')
        const computed = getComputedStyle(bar)

        expect(computed.borderRadius).toBe('3px')
        expect(computed.overflow).toBe('hidden')
    })

    it('should merge the received sx over the color styles', () => {
        render(
            <Progress
                linear
                variant='determinate'
                value={50}
                primaryColor='rgb(1, 2, 3)'
                sx={{ borderRadius: '3px' }}
            />
        )

        const computed = getComputedStyle(screen.getByRole('progressbar'))

        expect(computed.borderRadius).toBe('3px')
        expect(computed.backgroundColor).toBe('rgb(1, 2, 3)')
    })

    it('should render the circular label inside the ring', () => {
        render(<Progress variant='determinate' value={72} label='72%' />)

        const bar = screen.getByRole('progressbar')
        const label = screen.getByText('72%')

        expect(label.parentElement).not.toBe(bar.parentElement)
        expect(label.parentElement?.parentElement).toBe(bar.parentElement)
        expect(getComputedStyle(label.parentElement as Element).position).toBe(
            'absolute'
        )
    })

    it('should render the circular label beside a ring too small for it', () => {
        render(
            <Progress size={24} variant='determinate' value={72} label='72%' />
        )

        const bar = screen.getByRole('progressbar')

        expect(screen.getByText('72%').parentElement).toBe(bar.parentElement)
    })

    it('should treat a size in an unknown unit as large enough', () => {
        render(
            <Progress
                size='3rem'
                variant='determinate'
                value={72}
                label='72%'
            />
        )

        const bar = screen.getByRole('progressbar')

        expect(screen.getByText('72%').parentElement).not.toBe(
            bar.parentElement
        )
    })

    it('should force the label beside a ring that would fit it', () => {
        render(
            <Progress
                size={48}
                labelPosition='beside'
                variant='determinate'
                value={72}
                label='72%'
            />
        )

        const bar = screen.getByRole('progressbar')

        expect(screen.getByText('72%').parentElement).toBe(bar.parentElement)
    })

    it('should force the label inside a ring too small for it', () => {
        render(
            <Progress
                size={24}
                labelPosition='inside'
                variant='determinate'
                value={72}
                label='72%'
            />
        )

        const bar = screen.getByRole('progressbar')
        const label = screen.getByText('72%')

        expect(label.parentElement?.parentElement).toBe(bar.parentElement)
        expect(getComputedStyle(label.parentElement as Element).position).toBe(
            'absolute'
        )
    })

    it('should accept the buffer variant on the linear bar', () => {
        render(<Progress linear variant='buffer' value={50} valueBuffer={75} />)

        expect(screen.getByRole('progressbar').classList).toContain(
            'MuiLinearProgress-buffer'
        )
    })

    it('should accept the query variant on the linear bar', () => {
        render(<Progress linear variant='query' />)

        expect(screen.getByRole('progressbar').classList).toContain(
            'MuiLinearProgress-query'
        )
    })

    it('should match snapshot', () => {
        const { container: circular } = render(<Progress />)
        const { container: linear } = render(<Progress linear />)

        expect(circular).toMatchSnapshot()
        expect(linear).toMatchSnapshot()
    })
})
