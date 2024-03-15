import React from 'react'
import { render, screen } from '@testing-library/react'
import Typography from '@/core/data-display/typography'
import { Avatar } from '.'

describe('Avatar', () => {
    it('should render first letter', () => {
        render(<Avatar>F</Avatar>)

        const avatar = screen.getByText('F')

        expect(avatar).toBeDefined()
    })

    it('should render primary color', () => {
        render(
            <Avatar primary data-testid='avatar-container'>
                F
            </Avatar>
        )

        const container = screen.getByTestId('avatar-container')

        const findPrimaryClass = Array.from(container.classList)
            .join(' ')
            .indexOf('makeStyles-primary-')

        expect(findPrimaryClass).toBeGreaterThan(-1)
    })

    it('should render with custom className', () => {
        render(
            <Avatar
                primary
                className={'custom-class'}
                data-testid='avatar-container'>
                F
            </Avatar>
        )

        const container = screen.getByTestId('avatar-container')

        expect(container.classList).toContain('custom-class')
    })

    it('should render nested children', () => {
        render(
            <Avatar>
                <div>
                    <Typography>icon</Typography>
                </div>
            </Avatar>
        )

        const avatar = screen.getByText('icon')

        expect(avatar).toBeDefined()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Avatar primary className={'custom-class'}>
                F
            </Avatar>
        )

        expect(container).toMatchSnapshot()
    })
})
