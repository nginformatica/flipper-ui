import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ExpansionPanel from '.'

const expectToThrow = (fn: () => void, message: string) => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(jest.fn())
    expect(fn).toThrow(message)
    spy.mockRestore()
}

describe('ExpansionPanel', () => {
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
        expect(expansionPanel.lastChild).toHaveProperty(
            'className',
            'MuiCollapse-root MuiCollapse-hidden'
        )
    })

    it('should render expanded', () => {
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
        expect(expansionPanel.lastChild).toHaveProperty(
            'className',
            'MuiCollapse-root MuiCollapse-entered'
        )
    })

    it('should render with actions', () => {
        render(
            <ExpansionPanel
                expanded
                editing={false}
                summary='Expansion Panel'
                role='mui-expansion-panel'
                onClick={jest.fn()}
                actions={<button role='action-button'>Confirm</button>}
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
                editing={true}
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
                    summary='Expansion Panel'
                    role='mui-expansion-panel'
                    onClick={jest.fn()}
                    actions={<button role='action-button'>Confirm</button>}
                    editable
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
                    summary='Expansion Panel'
                    role='mui-expansion-panel'
                    onSaveClick={jest.fn()}
                    onClick={jest.fn()}
                    actions={<button role='action-button'>Confirm</button>}
                    editable
                />
            )
        }, 'onEditClick is required when editable is true')
    })
})
