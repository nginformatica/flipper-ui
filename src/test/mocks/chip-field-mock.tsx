import React from 'react'
import type { SyntheticEvent } from 'react'
import type { AutocompleteChangeReason } from '@/core/inputs/autocomplete'
import ChipField from '@/core/inputs/chip-field'

interface IMultiple {
    onChange?: (
        _event: SyntheticEvent<Element, Event>,
        value: string[],
        reason?: AutocompleteChangeReason
    ) => void
}

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
