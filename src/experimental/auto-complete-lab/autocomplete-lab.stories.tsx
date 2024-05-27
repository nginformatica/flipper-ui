import React from 'react'
import type { Meta } from '@storybook/react'
import { TextField } from '@/core/inputs/text-field'
import { Autocomplete as AutocompleteLab } from '.'

export default {
    title: 'Experimental/AutoCompleteLab',
    component: AutocompleteLab
} as Meta<typeof AutocompleteLab>

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
