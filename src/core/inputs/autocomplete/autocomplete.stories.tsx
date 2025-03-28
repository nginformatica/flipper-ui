import React from 'react'
import type { Meta } from '@storybook/react'
import TextField from '@/core/inputs/text-field'
import { Autocomplete as AutocompleteInput } from '.'

export default {
    title: 'Inputs/Autocomplete',
    component: AutocompleteInput
} as Meta<typeof AutocompleteInput>

export const Autocomplete = () => (
    <AutocompleteInput
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
