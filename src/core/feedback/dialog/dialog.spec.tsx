import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Dialog from '.'
import Button from '@/core/inputs/button'

describe('Dialog', () => {
    it('should render opened', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
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
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                snippet='Snippet'
            />
        )

        const title = screen.getByText('My beautiful Dialog')
        const text = screen.getByText('Is not it?')
        const close = screen.getByText('Close')
        const snippet = screen.getByText('Snippet')

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(close).toBeDefined()
        expect(snippet).toBeDefined()
    })

    it('should render with title action', () => {
        render(
            <Dialog
                open
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                titleAction={
                    <Button
                        data-testid='title-action-button'
                        onClick={jest.fn()}>
                        Title action
                    </Button>
                }
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
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                content={<div>Content</div>}
            />
        )

        const title = screen.getByText('My beautiful Dialog')
        const close = screen.getByText('Close')
        const content = screen.getByText('Content')

        expect(title).toBeDefined()
        expect(close).toBeDefined()
        expect(content).toBeDefined()
    })

    it('should render with scroll body option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                scroll='body'
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollBody')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollBody'
        )
    })

    it('should render with scroll unset-body option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                scroll='unset-body'
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
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                scroll='paper'
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollPaper')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollPaper'
        )
    })

    it('should render with scroll unset-paper option', () => {
        render(
            <Dialog
                open
                aria-title='dialog-paper'
                title='My beautiful Dialog'
                text={'Is not it?'}
                onClose={jest.fn()}
                actions={<Button onClick={jest.fn()}>Close</Button>}
                scroll='unset-paper'
            />
        )

        const element = screen.getByTitle('dialog-paper')

        expect(element.classList).toContain('MuiDialog-paperScrollPaper')
        expect(element.parentElement?.classList).toContain(
            'MuiDialog-scrollPaper'
        )
    })
})
