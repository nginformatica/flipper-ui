import React, { ReactNode } from 'react'
import {
    Autocomplete as MuiAutocomplete,
    AutocompleteClassKey,
    AutocompleteRenderInputParams
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
    renderInput(params: AutocompleteRenderInputParams): ReactNode
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

    inputRoot: (actions: React.ReactNode | JSX.Element) => ({
        '&.MuiOutlinedInput-root': {
            padding: actions
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

const AutocompleteNew = ({
    suggestions,
    selectTextOnFocus,
    openOnFocus,
    classes,
    actions,
    renderInput: renderInputProp,
    ...otherProps
}: IProps) => {

    const styles = useStyles(actions)

    const renderInput = (params: AutocompleteRenderInputParams) =>
        <Wrapper>
            { renderInputProp(params) }
            { actions }
        </Wrapper>

    return (
        <MuiAutocomplete
            freeSolo
            autoHighlight
            multiple={ false }
            options={ suggestions }
            getOptionLabel={ getOptionLabel }
            selectOnFocus={ selectTextOnFocus }
            renderInput={ renderInput }
            classes={ {
                root: styles.root,
                inputRoot: styles.inputRoot,
                focused: styles.focused,
                ...classes
            } }
            { ...otherProps }
        />
    )
}

export default AutocompleteNew
