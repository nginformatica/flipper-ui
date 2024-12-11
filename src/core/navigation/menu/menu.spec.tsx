import React from 'react'
import { render, screen } from '@testing-library/react'
import ListItem from '@/core/data-display/list-item'
import { IconFolderShared } from '@/icons/mui-icons'
import Menu from '.'

describe('Menu', () => {
    it('should render', () => {
        render(
            <Menu open>
                <ListItem icon={<IconFolderShared />} title='Menu 1' />
                <ListItem icon={<IconFolderShared />} title='Menu 2' />
            </Menu>
        )

        const element = screen.getByText('Menu 1')
        const element2 = screen.getByText('Menu 2')

        expect(element).toBeDefined()
        expect(element2).toBeDefined()
    })

    it('should render closed', () => {
        render(
            <Menu open={false}>
                <ListItem icon={<IconFolderShared />} title='Menu 1' />
                <ListItem icon={<IconFolderShared />} title='Menu 2' />
            </Menu>
        )

        const element = screen.queryByText('Menu 1')
        const element2 = screen.queryByText('Menu 2')

        expect(element).toBeNull()
        expect(element2).toBeNull()
    })

    it('should render with wrapper', () => {
        // NOTE - There is a console error happening when the menu is rendered with
        // a wrapper, the error occurs on material ui lib so we do not have control
        // over it. We are just ignoring it for now since it is not a problem with
        // our code and do not affect the component behavior.
        const spy = jest.spyOn(console, 'error')

        spy.mockImplementation(jest.fn())

        render(
            <Menu open withWrapper>
                <ListItem title='Menu 1' />
                <ListItem title='Menu 2' />
            </Menu>
        )

        const element = screen.getByRole('menu-wrapper-container')

        expect(element).toBeDefined()
        spy.mockRestore()
    })

    it('should render with custom style', () => {
        // NOTE - There is a console error happening when the menu is rendered with
        // a wrapper, the error occurs on material ui lib so we do not have control
        // over it. We are just ignoring it for now since it is not a problem with
        // our code and do not affect the component behavior
        const spy = jest.spyOn(console, 'error')

        spy.mockImplementation(jest.fn())

        render(
            <Menu open margin={10} padding={5} style={{ color: 'red' }}>
                <ListItem title='Menu 1' />
                <ListItem title='Menu 2' />
            </Menu>
        )

        const container = screen.getByRole('presentation')

        expect(container).toHaveProperty('style.color', 'red')
        expect(container).toHaveProperty('style.margin', '10px')
        expect(container).toHaveProperty('style.padding', '5px')

        spy.mockRestore()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Menu open>
                <ListItem icon={<IconFolderShared />} title='Menu 1' />
                <ListItem icon={<IconFolderShared />} title='Menu 2' />
            </Menu>
        )

        expect(container).toMatchSnapshot()
    })
})
