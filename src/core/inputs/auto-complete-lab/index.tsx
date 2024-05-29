import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { default as MuiAutocomplete } from '@material-ui/lab/Autocomplete'
export type {
    AutocompleteRenderInputParams,
    AutocompleteProps,
    AutocompleteCloseReason,
    AutocompleteChangeReason,
    AutocompleteInputChangeReason,
    AutocompleteGetTagProps,
    AutocompleteRenderOptionState
} from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles({
    inputRoot: {
        '&.MuiOutlinedInput-root': {
            padding: '0 62px 0 8px'
        }
    }
})

export const AutoComplete: typeof MuiAutocomplete = props => {
    const { classes, ...otherProps } = props
    const styles = useStyles(props)

    return (
        <MuiAutocomplete
            {...otherProps}
            classes={{
                inputRoot: styles.inputRoot,
                ...classes
            }}
        />
    )
}
