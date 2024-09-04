import React from 'react'
import type { SyntheticEvent } from 'react'
import type { AutocompleteChangeReason } from '../autocomplete'
import type { Meta } from '@storybook/react'
import ChipField from '.'

interface IMultiple {
    onChange?: (
        _event: SyntheticEvent<Element, Event>,
        value: string[],
        reason?: AutocompleteChangeReason
    ) => void
}

export default {
    title: 'Inputs/Chip Field',
    component: ChipField
} as Meta<typeof ChipField>

export const MultipleField = ({ onChange }: IMultiple) => {
    return (
        <ChipField
            label='Emails *'
            list={[
                { value: 'email@1.com', label: 'email@1.com' },
                { value: 'email@2.com', label: 'email@2.com' }
            ]}
            error={false}
            disabled={false}
            value={[]}
            onChange={onChange}
        />
    )
}
