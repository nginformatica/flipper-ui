import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Tooltip from '.'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { Button } from '@material-ui/core'

describe('Tooltip', () => {
    it('should render a Tooltip', async () => {
        render(
            <Tooltip enterDelay={1} title='Tooltip Message'>
                <Button variant='outlined'>Tooltip</Button>
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
                <Button variant='outlined'>Tooltip</Button>
            </Tooltip>
        )

        const label = screen.getByText('Tooltip')

        await act(async () => {
            await userEvent.hover(label)
        })

        const message = screen.getByText('Tooltip Message')

        expect(message).toBeDefined()
    })
})