import React, { act } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Tooltip from '.'

describe('Tooltip', () => {
    it('should render', async () => {
        render(
            <Tooltip enterDelay={1} title='Tooltip Message'>
                <button>Tooltip</button>
            </Tooltip>
        )

        const label = screen.getByText('Tooltip')

        await act(async () => {
            await userEvent.hover(label)
        })

        const message = screen.getByText('Tooltip Message')

        expect(message).toBeDefined()
    })

    it('should render a Tooltip with wrapper', async () => {
        render(
            <Tooltip withWrapper enterDelay={1} title='Tooltip Message'>
                <button>Tooltip</button>
            </Tooltip>
        )

        const label = screen.getByText('Tooltip')

        await act(async () => {
            await userEvent.hover(label)
        })

        const message = screen.getByText('Tooltip Message')

        expect(message).toBeDefined()
    })

    it('should not render a Tooltip', async () => {
        render(
            <Tooltip title=''>
                <button>Tooltip</button>
            </Tooltip>
        )

        const label = screen.getByText('Tooltip')

        await act(async () => {
            await userEvent.hover(label)
        })

        const message = screen.queryByText('Tooltip Message')

        expect(message).toBeNull()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Tooltip withWrapper enterDelay={1} title='Tooltip Message'>
                <button>Tooltip</button>
            </Tooltip>
        )

        expect(container).toMatchSnapshot()
    })
})
