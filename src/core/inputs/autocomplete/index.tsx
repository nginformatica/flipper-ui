import React from 'react'
import MuiAutocomplete from '@mui/material/Autocomplete'
export type {
    AutocompleteChangeReason,
    AutocompleteCloseReason,
    AutocompleteInputChangeReason,
    AutocompleteProps,
    AutocompleteRenderGetTagProps,
    AutocompleteRenderInputParams,
    AutocompleteRenderOptionState
} from '@mui/material/Autocomplete'

export const Autocomplete: typeof MuiAutocomplete = props => {
    const { ...otherProps } = props

    return <MuiAutocomplete {...otherProps} />
}
