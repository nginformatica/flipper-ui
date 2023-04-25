import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '.'
import Typography from '@/core/data-display/Typography'

describe('Avatar', () => {
    it('should render first letter', () => {
        render(<Avatar>F</Avatar>)

        const avatar = screen.getByText('F')

        expect(avatar).toBeDefined()
    })

    it('should render primary', () => {
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
        const customClass = 'custom-class'
        render(
            <Avatar
                primary
                className={customClass}
                data-testid='avatar-container'>
                F
            </Avatar>
        )

        const container = screen.getByTestId('avatar-container')

        expect(container.classList).toContain(customClass)
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
})
