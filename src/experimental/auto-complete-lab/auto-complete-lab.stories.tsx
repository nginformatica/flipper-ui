import React from 'react'
import { Autocomplete as AutocompleteLab } from '@material-ui/lab'
import type { Meta } from '@storybook/react'
import { default as AutoComplete } from '@/core/inputs/auto-complete'
import { TextField } from '@/core/inputs/text-field'

export default {
    title: 'Experimental/AutoCompleteLab',
    component: AutoComplete
} as Meta<typeof AutoComplete>

export const Default = () => (
    <AutocompleteLab
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
                fullWidth
                label='Flowers'
                placeholder='Flowers'
                variant='outlined'
            />
        )}
        onChange={() => null}
    />
)
