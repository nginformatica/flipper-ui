import React, { ReactNode } from 'react'
import {
    Autocomplete as MuiAutocomplete,
    AutocompleteClassKey,
    RenderInputParams
} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

interface IProps {
    value?: string | TSelected
    defaultValue?: string
    clearText?: string
    closeText?: string
    noOptionsText?: string
    classes?: Partial<Record<AutocompleteClassKey, string>>
    openOnFocus?: boolean
    selectTextOnFocus?: boolean
    suggestions: TSelected[]
    actions?: React.ReactNode | JSX.Element
    onChange?(event: React.ChangeEvent<{}>, value?: TSelected): void
    onInputChange?(event: React.ChangeEvent<{}>, value?: string): void
    renderInput(params: RenderInputParams): ReactNode
    onBlur?(event: React.ChangeEvent<{}>): void
}

type TSelected = {
    label: string
    value?: string
}

const Wrapper = styled.div`
	position: relative;
`

const useStyles = makeStyles({
    root: {
        '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
            transform: 'translate(14px, 12px) scale(1)',
            fontSize: '14px'
        },
        '& .MuiOutlinedInput-input': {
            paddingTop: '10px',
            paddingBottom: '10px'
        },
        '& .MuiAutocomplete-clearIndicator': {
            color: '#152849'
        }
    },

    inputRoot: (props: { actions: React.ReactNode | JSX.Element }) => ({
        '&.MuiOutlinedInput-root': {
            padding: props.actions
                ? '0 150px 0 8px !important'
                : '0 39px 0 8px !important'
        }
    }),

    focused: {
        '& .MuiFormLabel-root': {
            color: '#152849'
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#152849'
        }
    }
})

const getOptionLabel = (props: TSelected) => props.label

const AutocompleteNew = (props: IProps) => {
    const styles = useStyles(props)

    const renderInput = params =>
        <Wrapper>
            { props.renderInput(params) }
            { props.actions }
        </Wrapper>

    return (
        <MuiAutocomplete
            freeSolo
            autoHighlight
            multiple={ false }
            options={ props.suggestions }
            getOptionLabel={ getOptionLabel }
            selectOnFocus={ props.selectTextOnFocus }
            disableOpenOnFocus={ !props.openOnFocus }
            renderInput={ renderInput }
            classes={ {
                root: styles.root,
                inputRoot: styles.inputRoot,
                focused: styles.focused,
                ...props.classes
            } }
            { ...props }
        />
    )
}

export default AutocompleteNew
