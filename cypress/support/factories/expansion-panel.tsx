import { mount } from 'cypress/react18'
import React from 'react'
import { Generators } from '../'
import { ExpansionPanel, TextField } from '../../../src'
import { ExpansionPanelVariant } from '../types-interfaces-enums'
import { generateMockList } from '../component'
import { ExpansionPanelProps } from '../../../src/core/ExpansionPanel'

const Component: React.FC<ExpansionPanelProps> = props => {
    const [editing, setEditing] = React.useState(props.editing)
    const [details, setDetails] = React.useState(props.details)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleEditClick = () => {
        setEditing(true)
    }

    const handleSaveClick = () => {
        setDetails(inputRef.current?.value)
        setEditing(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSaveClick()
        }

        if (event.key === 'Escape') {
            setEditing(false)
        }
    }

    const renderDetails = () => {
        if (editing) {
            return (
                <TextField
                    autoFocus
                    inputRef={inputRef}
                    onKeyDown={handleKeyDown}
                />
            )
        }

        return details
    }

    return (
        <ExpansionPanel
            {...props}
            editing={editing}
            headerProps={{ 'data-cy': 'expansion-panel-header' }}
            editStyle={{ backgroundColor: 'red', width: '40px' }}
            onEditClick={handleEditClick}
            onSaveClick={handleSaveClick}
            details={renderDetails()}
        />
    )
}

export const ExpansionPanelFactory = async (preset: ExpansionPanelVariant) => {
    generateMockList({
        value: 'expansion-panel-content',
        type: ['Word', 'Words', 'Words']
    }).then(mock => {
        const props = Generators.generateExpansionPanelProps(preset, mock)
        mount(<Component data-cy='expansion-panel-container' {...props} />)
    })
}
