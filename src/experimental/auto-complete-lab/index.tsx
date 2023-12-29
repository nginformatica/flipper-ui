import React from 'react'
import { Autocomplete as MuiAutocomplete } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    inputRoot: {
        '&.MuiOutlinedInput-root': {
            padding: '0 62px 0 8px'
        }
    }
})

export const Autocomplete: typeof MuiAutocomplete = props => {
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

export default Autocomplete
