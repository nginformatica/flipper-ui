import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ISidebarOption } from '.'
import Sidebar from '.'

const options: ISidebarOption[] = [
    {
        icon: <svg />,
        label: 'Option-1',
        name: 'option1',
        route: '/option1'
    },
    {
        icon: <svg />,
        label: 'Option-2',
        name: 'option2',
        route: '/option2'
    }
]

const extraOptions: ISidebarOption[] = [
    {
        icon: <svg />,
        label: 'Extra Option 1',
        name: 'extraOption1',
        route: '/extraOption1'
    },
    {
        icon: <svg />,
        label: 'Extra Option 2',
        name: 'extraOption2',
        route: '/extraOption2'
    }
]

describe('Sidebar', () => {
    it('renders the options', () => {
        render(<Sidebar options={options} />)

        options.forEach(option => {
            expect(screen.getByTitle(option.label)).toBeDefined()
        })
    })

    it('calls handleGoTo when an option is clicked', () => {
        const handleGoTo = jest.fn()

        render(<Sidebar options={options} handleGoTo={handleGoTo} />)
        const expandBtn = screen.getByTestId('sidebar-option-option1')

        expandBtn.addEventListener(
            'click',
            event => event.preventDefault(),
            false
        )
        userEvent.click(expandBtn)

        expect(handleGoTo).toHaveBeenCalledWith('option1', '/option1')
    })

    it('renders extraOptions when provided', () => {
        render(<Sidebar options={options} extraOptions={extraOptions} />)
        extraOptions.forEach(option => {
            expect(screen.getByTitle(option.label)).toBeDefined()
        })
    })

    it('renders a skeleton when loading', () => {
        render(<Sidebar loading options={options} />)
        expect(screen.queryAllByRole('skeleton')).toHaveLength(6)
    })

    it('should show labels when expanded', async () => {
        const handleGoTo = jest.fn()

        render(<Sidebar options={options} handleGoTo={handleGoTo} />)
        const expandBtn = screen.getByTestId('sidebar-button')

        userEvent.click(expandBtn)

        await waitFor(() => {
            const labels = options.map(option =>
                screen.getByTestId(`list-item-${option.label}`)
            )

            labels.forEach(label => expect(label).toBeDefined())
        })
    })

    it('should now show labels when collapsed', async () => {
        const handleGoTo = jest.fn()

        render(<Sidebar options={options} handleGoTo={handleGoTo} />)

        await waitFor(() => {
            const labels = options.map(option =>
                screen.queryByTestId(`list-item-${option.label}`)
            )

            labels.forEach(label => expect(label).toBeNull())
        })
    })
})
