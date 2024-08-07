import React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from '.'

describe('Dialog', () => {
    it('should render opened', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                onClose={jest.fn()}
            />
        )

        const title = screen.getByText('My beautiful Dialog')
        const text = screen.getByText('Is not it?')
        const close = screen.getByText('Close')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(close).toBeDefined()
    })

    it('should render with snippet', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                snippet='Snippet'
                onClose={jest.fn()}
            />
        )

        const snippet = screen.getByText('Snippet')

        expect(snippet).toBeDefined()
    })

    it('should render with title action', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                titleAction={
                    <button
                        data-testid='title-action-button'
                        onClick={jest.fn()}>
                        Title action
                    </button>
                }
                onClose={jest.fn()}
            />
        )

        const actionButton = screen.getByTestId('title-action-button')

        expect(actionButton).toBeDefined()
    })

    it('should render with content', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                actions={<button onClick={jest.fn()}>Close</button>}
                content={<div>Content</div>}
                onClose={jest.fn()}
            />
        )

        const content = screen.getByText('Content')

        expect(content).toBeDefined()
    })

    it('should render with scroll body option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                scroll='body'
                onClose={jest.fn()}
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollBody')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollBody'
        )
    })

    it('should render with scroll body option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                scroll='body'
                onClose={jest.fn()}
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollBody')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollBody'
        )
    })

    it('should render with scroll paper option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                scroll='paper'
                onClose={jest.fn()}
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollPaper')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollPaper'
        )
    })

    it('should render with scroll paper option', () => {
        render(
            <Dialog
                open
                scroll='paper'
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text='Is not it?'
                actions={<button onClick={jest.fn()}>Close</button>}
                onClose={jest.fn()}
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollPaper')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollPaper'
        )
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                actions={<button onClick={jest.fn()}>Close</button>}
                content={<div>Content</div>}
                onClose={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
