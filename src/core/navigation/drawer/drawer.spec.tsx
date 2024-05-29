import React from 'react'
import { render, screen } from '@testing-library/react'
import Drawer from '.'

describe('Drawer', () => {
    it('should render', () => {
        render(
            <Drawer open data-testid='drawer'>
                <div>Drawer</div>
            </Drawer>
        )

        const drawer = screen.getByTestId('drawer')
        const drawerContent = screen.getByText('Drawer')

        expect(drawer).toBeDefined()
        expect(drawerContent).toBeDefined()
    })

    it('should render nothing when closed', () => {
        const container = render(
            <Drawer open={false} data-testid='drawer'>
                <div>Drawer</div>
            </Drawer>
        )

        expect(container.container.firstChild).toBeNull()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Drawer open data-testid='drawer'>
                <div>Drawer</div>
            </Drawer>
        )

        expect(container).toMatchSnapshot()
    })
})
