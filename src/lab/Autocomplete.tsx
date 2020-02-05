import React from 'react'
import {
    default as MuiAutocomplete,
    AutocompleteProps
} from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    inputRoot: {
        '&.MuiOutlinedInput-root': {
            padding: '0 62px 0 8px'
        }
    }
})

export type IProps = AutocompleteProps

const Autocomplete = (props: IProps) => {
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
