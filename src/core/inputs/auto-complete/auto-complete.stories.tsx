import React, { useState } from 'react'
import type { TSelected } from '.'
import type { Meta } from '@storybook/react'
import ListItem from '@/core/data-display/list-item'
import Typography from '@/core/data-display/typography'
import { TextField } from '@/core/inputs/text-field'
import { default as AutoComplete } from '.'

export default {
    title: 'Inputs/AutoComplete',
    component: AutoComplete
} as Meta<typeof AutoComplete>

export const Default = () => (
    <AutoComplete
        defaultIsOpen
        openOnFocus
        suggestions={[
            { value: 'rock', label: 'Rock' },
            { value: 'pop', label: 'Pop' },
            { value: 'classic', label: 'Classic' }
        ]}
        renderInput={({ value, inputProps }) => {
            return (
                <TextField
                    fullWidth
                    placeholder='Music genres'
                    value={value}
                    {...inputProps}
                />
            )
        }}
        renderSuggestion={(suggestion, _, selected) => {
            const label =
                typeof suggestion === 'string' ? suggestion : suggestion.label

            return (
                <ListItem key={label} selected={selected}>
                    {label}
                </ListItem>
            )
        }}
        onChange={() => null}
    />
)

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
        renderSuggestion={(item, props, selected) => {
            const label = typeof item === 'string' ? item : item.label

            return (
                <ListItem selected={selected} {...props}>
                    {label}
                </ListItem>
            )
        }}
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
        renderSuggestion={(item, props, selected) => {
            const label = typeof item === 'string' ? item : item.label
            const hasSubheader = typeof item === 'object' && item.subheader

            return hasSubheader ? (
                <ListItem>
                    <Typography variant='caption'>{item.label}</Typography>
                </ListItem>
            ) : (
                <ListItem {...props} selected={selected}>
                    {label}
                </ListItem>
            )
        }}
        // eslint-disable-next-line no-console
        onChange={e => console.log('onChange', e)}
    />
)
export const MockAtuoComplete = () => {
    const [value, setValue] = useState<TSelected>()

    const handleChange = (newValue: TSelected) => {
        setValue(newValue)
    }

    return (
        <AutoComplete
            openOnFocus
            autoFocus
            caseSensitive
            value={value}
            suggestions={[
                { label: 'Genres', subheader: true },
                { value: 'rock', label: 'Rock' },
                { value: 'pop', label: 'pop' },
                { value: 'classic', label: 'Classic' }
            ]}
            renderInput={props => {
                return (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )
            }}
            renderSuggestion={(item, props, selected) => {
                const label = typeof item === 'string' ? item : item.label
                const hasSubheader = typeof item === 'object' && item.subheader

                return hasSubheader ? (
                    <ListItem>
                        <Typography variant='caption'>{item.label}</Typography>
                    </ListItem>
                ) : (
                    <ListItem selected={selected} onClick={props.onClick}>
                        {label}
                    </ListItem>
                )
            }}
            onChange={handleChange}
        />
    )
}
