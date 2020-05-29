import React, { FC } from "react";
import { Autocomplete as MuiAutocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

interface IProps {
	value?: any
	classes?: any
	openOnFocus?: boolean
	selectTextOnFocus?: boolean
	suggestions: any[]
    actions?: React.ReactNode | JSX.Element
	renderInput(params: any): JSX.Element
	onInputChange?(event: React.ChangeEvent<{}>, value: string): void
	onBlur?(event: React.ChangeEvent<{}>): void
	onChange: (event: React.ChangeEvent<HTMLInputElement>, value: any) => void
}

const AddButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 12%;
	padding: 5px 8px;
	margin: auto;
	color: #152849;
	border-Radius: 5px;
	border: none;
	background-color: #efefef;
	font-size: 14px;
	cursor: pointer;
	z-index: 1;
`

const Wrapper = styled.div`
	position: relative
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

	inputRoot: (props: any) => ({
		'&.MuiOutlinedInput-root': {
			padding: props.actions
				? '0 170px 0 8px !important'
				: '0 65px 0 8px !important'
		}
	}),

	focused: {
		'& .MuiFormLabel-root': {
			color: '#152849',
		},
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#152849',
		},
	},

})

const AutocompleteNew: FC<IProps> = (props) => {
	const styles = useStyles(props)

	const { 
		renderInput: propRenderInput,
		openOnFocus,
		selectTextOnFocus,
		...otherProps
	} = props

	console.log(`component value: ${props.value}`)

	const getOptionLabel = opt => opt?.label || ''

	const renderInput = params =>
		<Wrapper>
			{ propRenderInput(params) }
			{ props.actions }	
		</Wrapper>

	return (
		<MuiAutocomplete
			freeSolo
			autoHighlight
			selectOnFocus={ props.selectTextOnFocus }
			getOptionLabel={ getOptionLabel }
			options={ props.suggestions }
			renderInput={ renderInput }
			onInputChange={ props.onChange }
			disableOpenOnFocus={ !props.openOnFocus }
			clearText='Limpar'
			closeText='Fechar'
			noOptionsText='Não localizado'
			classes={ {
				root: styles.root,
				inputRoot: styles.inputRoot,
				focused: styles.focused,
				...props.classes
			} }
			{ ...otherProps }
		/>
	);
};

export default AutocompleteNew;
