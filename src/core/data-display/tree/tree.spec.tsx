import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Tree from '.'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('Tree', () => {
    const NODES = [
        {
            id: 0,
            name: 'Tree',
            nodes: [
                {
                    id: 1,
                    name: 'Branch'
                },
                {
                    id: 2,
                    name: 'Branch'
                },
                {
                    id: 3,
                    name: 'Branch',
                    nodes: [
                        {
                            id: 5,
                            name: 'Leaf'
                        }
                    ]
                }
            ]
        }
    ]

    it('should render the Tree', () => {
        render(<Tree nodes={NODES} />)

        const root = screen.getByText('root')

        expect(root).toBeDefined()
    })

    it('should render with no nodes', () => {
        render(<Tree />)

        const root = screen.getByText('root')

        expect(root).toBeDefined()
    })

    it('should expand one level', async () => {
        render(<Tree nodes={NODES} />)

        const root = screen.getByText('root')

        await act(async () => await userEvent.click(root))

        const tree = screen.getByText('Tree')

        expect(tree).toBeDefined()
    })

    it('should expand two levels', async () => {
        render(<Tree nodes={NODES} />)

        const root = screen.getByText('root')

        await act(async () => await userEvent.click(root))

        const tree = screen.getByText('Tree')

        await act(async () => await userEvent.click(tree))

        const leaf = screen.getAllByText('Branch')

        expect(leaf.length).toEqual(3)
    })
})
