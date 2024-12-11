import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { IconFace } from '@/icons/mui-icons'
import ListItem from '.'
import '@testing-library/jest-dom'

describe('ListItem', () => {
    it('should render', () => {
        render(<ListItem title='Item 1' />)

        const listItem = screen.getByText('Item 1')

        expect(listItem).toBeDefined()
    })

    it('should render with avatar', () => {
        render(<ListItem title='Item 1' avatar={<div>Avatar</div>} />)

        const avatar = screen.getByText('Avatar')

        expect(avatar).toBeDefined()
    })

    it('should render with action', () => {
        render(<ListItem title='Item 1' action={<div>Action</div>} />)

        const action = screen.getByText('Action')

        expect(action).toBeDefined()
    })

    it('should render with subtitle', () => {
        render(<ListItem subtitle='Subtitle' />)

        const subtitle = screen.getByTestId('list-item-Subtitle')

        expect(subtitle).toBeDefined()
    })

    it('should render with custom width icon', () => {
        render(
            <ListItem title='Title' subtitle='Subtitle' icon={<IconFace />} />
        )

        const button = screen.getByRole('button')
        const icon = button.querySelector('.MuiListItemIcon-root')

        waitFor(() => {
            expect(icon).toHaveStyle({ minWidth: '42px' })
        })
    })

    it('should not render with custom width icon', () => {
        render(<ListItem icon={<IconFace />} />)

        const button = screen.getByRole('button')
        const icon = button.querySelector('.MuiListItemIcon-root')

        waitFor(() => {
            expect(icon).toHaveStyle({ minWidth: '0px' })
        })
    })

    it('should match snapshot', () => {
        const { container } = render(
            <ListItem
                title='Title'
                subtitle='Subtitle'
                icon={<IconFace />}
                avatar={<div>Avatar</div>}
                action={<div>Action</div>}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
