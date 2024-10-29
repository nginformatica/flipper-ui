import React from 'react'
import type { Meta } from '@storybook/react'
import TextField from '@/core/inputs/text-field'
import { Autocomplete } from '.'

export default {
    title: 'Inputs/Autocomplete Lab',
    component: Autocomplete
} as Meta<typeof Autocomplete>

export const AutocompleteLab = () => (
    <Autocomplete
        fullWidth
        disableClearable
        options={[
            { label: 'Anemone', value: 'forget-me-not' },
            { label: 'Forget me not', value: 'anemone' },
            { label: 'Snapdragon', value: 'snapdragon' },
            { label: 'Sunflower', value: 'sunflower' },
            { label: 'Rose', value: 'rose' }
        ]}
        getOptionLabel={option => option.label}
        renderInput={props => (
            <TextField
                {...props}
                fullWidth
                label='Flowers'
                variant='outlined'
            />
        )}
        onChange={() => null}
    />
)
