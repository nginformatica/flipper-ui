import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from '@/core/navigation/tab'
import Tabs from '.'

describe('Tabs', () => {
    it('should render', () => {
        render(
            <Tabs value={0}>
                <Tab label='Profile' />
                <Tab label='Enterprise' />
            </Tabs>
        )

        const tabActive = screen.getByText('Profile').parentElement
        const tabInactive = screen.getByText('Enterprise').parentElement

        expect(tabActive?.classList).toContain('Mui-selected')
        expect(tabInactive?.classList).not.toContain('Mui-selected')
    })

    it('should render with custom styles', () => {
        const { container } = render(
            <Tabs style={{ color: 'red' }} margin={10} padding={5} value={0}>
                <Tab label='Profile' />
                <Tab label='Enterprise' />
            </Tabs>
        )

        expect(container.firstElementChild).toHaveProperty('style.color', 'red')
        expect(container.firstElementChild).toHaveProperty(
            'style.margin',
            '10px'
        )
        expect(container.firstElementChild).toHaveProperty(
            'style.padding',
            '5px'
        )
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Tabs style={{ color: 'red' }} margin={10} padding={5} value={0}>
                <Tab label='Profile' />
                <Tab label='Enterprise' />
            </Tabs>
        )

        expect(container).toMatchSnapshot()
    })
})
