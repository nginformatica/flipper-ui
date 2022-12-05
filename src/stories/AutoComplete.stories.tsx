import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AutoComplete from '../core/AutoComplete'
import ListItem from '../core/ListItem'
import TextField from '../core/TextField'
import Typography from '../core/Typography'

export default {
    title: 'AutoComplete',
    component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = args => (
    <AutoComplete {...args} />
)

export const Default = Template.bind({})

Default.args = {
    suggestions: [
        { value: 'rock', label: 'Rock' },
        { value: 'pop', label: 'Pop' },
        { value: 'classic', label: 'Classic' }
    ],
    renderInput: props => (
        <TextField fullWidth placeholder='Music genres' {...props} />
    ),
    renderSuggestion: (item, props, selected) => (
        <ListItem key={item} selected={selected} {...props}>
            {item.label}
        </ListItem>
    ),
    onChange: () => null
}

export const OpeningWhenFocused = () => (
    <AutoComplete
        openOnFocus
        value={{ value: 'classic', label: 'Classic' }}
        suggestions={[
            { value: 'rock', label: 'Rock' },
            { value: 'pop', label: 'Pop' },
            { value: 'classic', label: 'Classic' }
        ]}
        renderInput={props => (
            <TextField fullWidth placeholder='Music genres' {...props} />
        )}
        renderSuggestion={(item, props, selected) => (
            <ListItem selected={selected} {...props}>
                {item.label}
            </ListItem>
        )}
        onChange={() => null}
    />
)

export const WithSubheader = () => (
    <AutoComplete
        openOnFocus
        suggestions={[
            { label: 'Genres', subheader: true },
            { value: 'rock', label: 'Rock' },
            { value: 'pop', label: 'Pop' },
            { value: 'classic', label: 'Classic' }
        ]}
        renderInput={props => (
            <TextField fullWidth placeholder='Music genres' {...props} />
        )}
        renderSuggestion={(item, props, selected) =>
            item.subheader ? (
                <ListItem>
                    <Typography variant='caption'>{item.label}</Typography>
                </ListItem>
            ) : (
                <ListItem {...props} selected={selected}>
                    {item.label || item}
                </ListItem>
            )
        }
        onChange={() => null}
    />
)
