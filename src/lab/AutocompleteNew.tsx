import React, { ChangeEvent } from 'react'
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

interface IProps {
    value?: string | TSelected
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    classes?: any
    openOnFocus?: boolean
    selectTextOnFocus?: boolean
    suggestions: TSelected[]
    actions?: React.ReactNode | JSX.Element
    onChange:
    (value: string | TSelected) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderInput(params): JSX.Element
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
        }
    },

    inputRoot: (props: { actions: React.ReactNode | JSX.Element }) => ({
        '&.MuiOutlinedInput-root': {
            padding: props.actions
                ? '0 170px 0 8px !important'
                : '0 65px 0 8px !important'
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

const AutocompleteNew = (props: IProps) => {
    const styles = useStyles(props)

    const {
        renderInput: propRenderInput
    } = props

    const getOptionLabel = opt => opt?.label || ''

    const renderInput = params =>
        <Wrapper>
            { propRenderInput(params) }
            { props.actions }
        </Wrapper>

    const handleChange = (_: ChangeEvent<{}>, value: string | TSelected) => {
        props.onChange(value)
    }

    return (
        <MuiAutocomplete
            freeSolo
            autoHighlight
            value={ props.value }
            selectOnFocus={ props.selectTextOnFocus }
            getOptionLabel={ getOptionLabel }
            options={ props.suggestions }
            renderInput={ renderInput }
            onChange={ handleChange }
            disableOpenOnFocus={ !props.openOnFocus }
            // TODO: passar isso como prop e colocar um default e.g:
            // clearText={ props.clearText || 'clean it' }
            clearText='Limpar'
            closeText='Fechar'
            noOptionsText='Não localizado'
            classes={ {
                root: styles.root,
                inputRoot: styles.inputRoot,
                focused: styles.focused,
                ...props.classes
            } }
        />
    )
}

export default AutocompleteNew
