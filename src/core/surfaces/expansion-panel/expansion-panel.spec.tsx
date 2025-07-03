import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ExpansionPanel from '.'
import '@testing-library/jest-dom'

const expectToThrow = (fn: () => void, message: string) => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = jest.spyOn(console, 'error')

    spy.mockImplementation(jest.fn())
    expect(fn).toThrow(message)
    spy.mockRestore()
}

describe('ExpansionPanel', () => {
    it('should render', () => {
        render(
            <ExpansionPanel
                expanded
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onClick={jest.fn()}
            />
        )

        const expansionPanel = screen.getByRole('mui-expansion-panel')

        expect((expansionPanel.lastChild as HTMLElement).className).toContain(
            'MuiCollapse-entered'
        )
    })

    it('should render closed', () => {
        render(
            <ExpansionPanel
                expanded={false}
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onClick={jest.fn()}
            />
        )

        const expansionPanel = screen.getByRole('mui-expansion-panel')

        expect((expansionPanel.lastChild as HTMLElement).className).toContain(
            'MuiCollapse-hidden'
        )
    })

    it('should render with details', () => {
        const content = 'This is the details content.'

        render(
            <ExpansionPanel
                expanded
                summary='Expansion Panel'
                role='mui-expansion-panel'
                details={<div>{content}</div>}
            />
        )

        const detailsElement = screen.getByText(content)

        expect(detailsElement).toBeInTheDocument()
    })

    it('should render with actions', () => {
        render(
            <ExpansionPanel
                expanded
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                actions={<button role='action-button'>Confirm</button>}
                onClick={jest.fn()}
            />
        )

        const expansionPanel = screen.getByRole('action-button')

        expect(expansionPanel.parentElement?.classList).toContain(
            'MuiAccordionActions-root'
        )
    })

    it('should render helper box on left', () => {
        const onHelperClick = jest.fn()

        render(
            <ExpansionPanel
                expanded
                helperButtonPosition='left'
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onHelperClick={onHelperClick}
                onClick={jest.fn()}
            />
        )

        const helperIcon = screen.getByRole('helper-box')

        expect(helperIcon.nextSibling).toBeTruthy()
    })

    it('should call onHelperClick', async () => {
        const onHelperClick = jest.fn()

        render(
            <ExpansionPanel
                expanded
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onHelperClick={onHelperClick}
                onClick={jest.fn()}
            />
        )

        const helperIcon = await screen.findByRole('helper-box')

        fireEvent.click(helperIcon.firstChild || helperIcon)

        await waitFor(() => expect(onHelperClick).toHaveBeenCalled())
    })

    it('should call onEditClick', async () => {
        const onEditClick = jest.fn()

        render(
            <ExpansionPanel
                expanded
                editable
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onEditClick={onEditClick}
                onClick={jest.fn()}
                onSaveClick={jest.fn()}
                onHelperClick={jest.fn()}
            />
        )

        const editBoxContainer = await screen.findByRole('edit-box')

        fireEvent.click(editBoxContainer.firstChild || editBoxContainer)

        await waitFor(() => expect(onEditClick).toHaveBeenCalled())
    })

    it('should call onSaveClick', async () => {
        const onSaveClick = jest.fn()

        render(
            <ExpansionPanel
                expanded
                editable
                editing
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onEditClick={jest.fn()}
                onClick={jest.fn()}
                onSaveClick={onSaveClick}
                onHelperClick={jest.fn()}
            />
        )

        const editBoxContainer = await screen.findByRole('edit-box')

        fireEvent.click(editBoxContainer.firstChild || editBoxContainer)

        await waitFor(() => expect(onSaveClick).toHaveBeenCalled())
    })

    it('should throw if onSaveClick is not defined on edit mode', () => {
        expectToThrow(() => {
            render(
                <ExpansionPanel
                    expanded
                    editing
                    editable
                    summary='Expansion Panel'
                    role='mui-expansion-panel'
                    actions={<button role='action-button'>Confirm</button>}
                    onClick={jest.fn()}
                />
            )
        }, 'onSaveClick is required when editable is true')
    })

    it('should throw if onEditClick is not defined on edit mode', () => {
        expectToThrow(() => {
            render(
                <ExpansionPanel
                    expanded
                    editing
                    editable
                    summary='Expansion Panel'
                    role='mui-expansion-panel'
                    actions={<button role='action-button'>Confirm</button>}
                    onSaveClick={jest.fn()}
                    onClick={jest.fn()}
                />
            )
        }, 'onEditClick is required when editable is true')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <ExpansionPanel
                expanded
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                actions={<button role='action-button'>Confirm</button>}
                onClick={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
