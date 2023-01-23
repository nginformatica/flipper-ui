import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExpansionPanel from '../core/ExpansionPanel'
import Typography from '../core/Typography'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Button from '../core/Button'
import TextField from '../core/TextField'

export default {
    title: 'ExpansionPanel',
    component: ExpansionPanel
} as ComponentMeta<typeof ExpansionPanel>

const Template: ComponentStory<typeof ExpansionPanel> = args => {
    const [editing, setEditing] = React.useState(args.editing)
    const [details, setDetails] = React.useState(args.details)
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
            {...args}
            editing={editing}
            editStyle={{ backgroundColor: 'red', width: '40px' }}
            onEditClick={handleEditClick}
            onSaveClick={handleSaveClick}
            details={renderDetails()}
        />
    )
}
export const Default = Template.bind({})

Default.args = {
    summary: 'Pulp Fiction',
    onHelperClick: () => window.alert('HELP!'),
    expandIcon: <ExpandMore />,
    actions: <Button color='primary'>Confirm</Button>,
    details: (
        <div>
            <Typography gutterBottom>
                books about imaginary characters and events, produced in large
                quantities and intended to be read by many people but not
                considered to be of very good quality:
            </Typography>
            <Typography variant='caption'>
                She was reading a pulp fiction thriller with a lurid cover.
            </Typography>
        </div>
    )
}

export const Disabled = Template.bind({})

Disabled.args = {
    disabled: true,
    summary: 'Dormammu',
    details: 'I have come to bargain',
    expandIcon: <ExpandMore />
}

export const WithEditable = Template.bind({})

WithEditable.args = {
    editable: true,
    summary: 'Editable Expansion Panel',
    details: 'This is an editable expansion panel',
    expandIcon: <ExpandMore />
}
