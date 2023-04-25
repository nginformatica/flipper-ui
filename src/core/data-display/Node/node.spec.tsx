import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Node from '.'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

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
