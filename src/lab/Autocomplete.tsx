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

// Missing props, the multiple prop is required for a better inference
export type IProps<T> = AutocompleteProps<T> & ({
    multiple: false
    defaultValue?: T
    value?: T
    onChange?(event: React.ChangeEvent<{}>, value: T): void
} | {
    multiple: true
    defaultValue?: T[]
    value?: T[]
    onChange?(event: React.ChangeEvent<{}>, value: T[]): void
})

const Autocomplete = <T,>(props: IProps<T>) => {
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

Autocomplete.defaultProps = {
    multiple: false
}

export default Autocomplete
