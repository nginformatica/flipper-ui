import React from 'react'
import {
    default as MuiAutocomplete
} from '@material-ui/lab/Autocomplete'
export { AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete'
export { AutocompleteProps } from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    inputRoot: {
        '&.MuiOutlinedInput-root': {
            padding: '0 62px 0 8px'
        }
    }
})

const Autocomplete: typeof MuiAutocomplete = props => {
    const { classes, ...otherProps } = props
    const styles = useStyles(props)

    return (
        <MuiAutocomplete
            { ...otherProps }
            classes={ {
                inputRoot: styles.inputRoot,
                ...classes
            } }
        />
    )
}

export default Autocomplete
