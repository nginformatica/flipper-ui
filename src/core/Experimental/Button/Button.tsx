import Button from '../../Button'
import { NoteAdd as IconAdd } from '../../../icons'
import React from 'react'
import styled from 'styled-components'

export type Props = {
    label?: string
    name: string
    margin?: string | number
    padding?: string | number
    onClick?(): void
}

const ButtonStyled = styled(Button)`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const AddButton = (props: Props) => (
    <ButtonStyled
        {...props}
        variant='dashed'
        color='primary'
        id={'add-' + props.name}
        name={'add-' + props.name}
        padding={props.padding}
        margin={props.margin || '12px 0 24px'}
        onClick={props.onClick}>
        <IconAdd />
        {props.label}
    </ButtonStyled>
)

export default AddButton
