import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Badge from '.'

describe('Badge', () => {
    it('should render', () => {
        render(<Badge counter={2}>Badge</Badge>)

        const avatar = screen.getByText('Badge')
        const badge = screen.getByText('2')

        expect(avatar).toBeDefined()
        expect(badge).toBeDefined()
    })

    it('should render with primary color', () => {
        render(
            <Badge color='primary' counter={2}>
                Badge
            </Badge>
        )

        const badge = screen.getByText('2')

        expect(badge.classList).toContain('MuiBadge-colorPrimary')
    })
})

describe('Badges - Snapshots', () => {
    it('should match snapshot', () => {
        const { container } = render(<Badge counter={2}>Badge</Badge>)

        expect(container).toMatchSnapshot()
    })
})
