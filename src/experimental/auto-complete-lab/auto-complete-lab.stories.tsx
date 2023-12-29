import React from 'react'
import { Meta } from '@storybook/react'
import AutoComplete from '@/core/inputs/auto-complete'
import TextField from '@/core/inputs/text-field'
import { Autocomplete } from '@mui/material'

export default {
    title: 'Experimental/AutoCompleteLab',
    component: AutoComplete
} as Meta<typeof AutoComplete>

export const Default = () => (
    <Autocomplete
        options={[
            { label: 'Anemone', value: 'forget-me-not' },
            { label: 'Forget me not', value: 'anemone' },
            { label: 'Snapdragon', value: 'snapdragon' },
            { label: 'Sunflower', value: 'sunflower' },
            { label: 'Rose', value: 'rose' }
        ]}
        getOptionLabel={option => option.label}
        style={{ width: 300 }}
        renderInput={props => (
            <TextField
                {...props}
                label='Flowers'
                placeholder='Flowers'
                variant='outlined'
                fullWidth
            />
        )}
        onChange={() => null}
    />
)
