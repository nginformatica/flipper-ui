import React from 'react'
import type { Meta } from '@storybook/react'
import TextField from '@/core/inputs/text-field'
import { AutoComplete } from '.'

export default {
    title: 'Inputs/AutoComplete Lab',
    component: AutoComplete
} as Meta<typeof AutoComplete>

export const AutoCompleteLab = () => (
    <AutoComplete
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
