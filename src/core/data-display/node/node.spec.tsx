import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Node } from '.'

describe('Node', () => {
    it('should render', () => {
        render(
            <Node name='Branch'>
                <Node id='2' name='Node 1' />
                <Node id='3' name='Node 2' />
            </Node>
        )

        const node1 = screen.queryByText('Node 1')
        const node2 = screen.queryByText('Node 2')

        expect(node1).toBeNull()
        expect(node2).toBeNull()
    })

    it('should open nodes inside', async () => {
        render(
            <Node name='Branch'>
                <Node id='2' name='Node 1' />
                <Node id='3' name='Node 2' />
            </Node>
        )

        const node = screen.getByText('Branch')

        await act(async () => await userEvent.click(node))

        const node1 = screen.getByText('Node 1')
        const node2 = screen.getByText('Node 2')

        expect(node1).toBeDefined()
        expect(node2).toBeDefined()
    })
})
