import React from 'react'
import type { KeyboardEvent, SyntheticEvent } from 'react'
import type { AutocompleteChangeReason } from '../autocomplete'
import { Autocomplete } from '../autocomplete'
import TextField from '../text-field'

export interface ChipFieldProps {
    label?: string
    list?: {
        value: string
        label?: string
    }[]
    error?: boolean | undefined
    disabled?: boolean | undefined
    value: (string | undefined)[] | undefined
    onChange?: (
        _event: SyntheticEvent<Element, Event>,
        value: string[],
        reason?: AutocompleteChangeReason
    ) => void
}

const ChipField = (props: ChipFieldProps) => {
    const { label, list, error, disabled, value, onChange } = props

    return (
        <Autocomplete
            multiple
            fullWidth
            open={false}
            options={[]}
            disabled={disabled}
            forcePopupIcon={false}
            value={value}
            renderInput={props => (
                <TextField
                    {...props}
                    fullWidth
                    label={label}
                    error={error}
                    disabled={disabled}
                    variant='outlined'
                    onKeyDown={(e: KeyboardEvent<Element>) => {
                        const input = e.target as HTMLInputElement

                        if (
                            e.key === ',' ||
                            e.key === ';' ||
                            e.key === ' ' ||
                            e.key === 'Enter'
                        ) {
                            e.preventDefault()

                            const labels: string[] = list
                                ? list
                                      .map(option => option.label)
                                      .filter(
                                          (label): label is string =>
                                              label !== undefined
                                      )
                                : []

                            onChange?.(e, [...labels, input.value])

                            input.value = ''
                        }
                    }}
                />
            )}
            sx={{
                '.MuiAutocomplete-tag': {
                    margin: '1px 3px'
                },
                '.MuiChip-root': {
                    height: '27px'
                }
            }}
            onChange={onChange}
        />
    )
}

export default ChipField
