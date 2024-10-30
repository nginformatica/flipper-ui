import React, { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ExpandMore } from '@mui/icons-material'
import type { ExpansionPanelProps } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@/core/data-display/typography'
import Button from '@/core/inputs/button'
import TextField from '@/core/inputs/text-field'
import ExpansionPanel from '.'

const meta: Meta<typeof ExpansionPanel> = {
    title: 'Surfaces/ExpansionPanel',
    component: ExpansionPanel,
    argTypes: {
        editable: {
            control: 'boolean',
            description:
                'To make the panel editable. ' +
                'Requires the onSaveClick and onEditClick functions.'
        },
        disabled: {
            control: 'boolean',
            description: 'To disable the panel'
        },
        summary: {
            control: 'text',
            description: 'The panel visible text when closed'
        },
        expandIcon: {
            control: false,
            description: 'The panel expand icon'
        },
        actions: {
            control: false,
            description: 'The panel action buttons'
        },
        details: {
            control: false,
            description: 'The panel content'
        },
        helperButtonPosition: {
            options: ['left', 'right'],
            control: { type: 'radio' },
            description:
                'The helper button position. ' +
                'Must be `left | right`. ' +
                'If not set, the default is "right"'
        },
        margin: {
            control: 'text',
            description: 'The panel margin'
        },
        onHelperClick: {
            control: false,
            description: 'The onHelperClick function, must be `() => void`'
        },
        onSaveClick: {
            control: false,
            description: 'The onSaveClick function, must be `() => void`'
        },
        onEditClick: {
            control: false,
            description: 'The onEditClick function, must be `() => void`'
        },
        padding: {
            control: 'text',
            description: 'The panel padding'
        },
        style: {
            control: 'object',
            description: 'The panel style'
        }
    }
}

export default meta

type Story = StoryObj<typeof ExpansionPanel>

const ExpansionPanelWrapper = (
    args: JSX.IntrinsicAttributes & ExpansionPanelProps
) => {
    const [editing, setEditing] = useState(args.editing)
    const [details, setDetails] = useState(args.details)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleEditClick = () => {
        setEditing(true)
    }

    const handleSaveClick = () => {
        setDetails(inputRef.current?.value)
        setEditing(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
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
            {...args}
            editing={editing}
            details={renderDetails()}
            onEditClick={handleEditClick}
            onSaveClick={handleSaveClick}
        />
    )
}

export const expansionPanel: Story = {
    render: ({ ...args }) => {
        return <ExpansionPanelWrapper {...args} />
    },
    args: {
        editable: false,
        disabled: false,
        summary: 'Pulp Fiction',
        expandIcon: <ExpandMore />,
        actions: (
            <Button color='primary' margin='12px'>
                Confirm
            </Button>
        ),
        details: (
            <div>
                <Typography gutterBottom>
                    books about imaginary characters and events, produced in
                    large quantities and intended to be read by many people but
                    not considered to be of very good quality:
                </Typography>
                <Typography variant='caption'>
                    She was reading a pulp fiction thriller with a lurid cover.
                </Typography>
            </div>
        ),
        helperButtonPosition: 'right',
        onHelperClick: () => alert('HELP!'),
        onSaveClick: () => alert('Save Click!'),
        onEditClick: () => alert('Edit Click!'),
        margin: '',
        padding: '',
        style: {}
    }
}
