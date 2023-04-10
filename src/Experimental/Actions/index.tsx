import { ButtonProps } from '@material-ui/core'
import { Button } from '@/index'
import React from 'react'
import styled from 'styled-components'

export interface IProps {
    padding?: number | string
    margin?: number | string
    align?: 'flex-end' | 'flex-start' | 'center'
    disabled?: boolean
    names?: {
        cancel: string
        confirm: string
    }
    labels?: {
        cancel: string
        confirm: string
    }
    readonly?: boolean
    prefix?: string
    buttons?: Array<'confirm' | 'cancel'>
    actionButtonColor?: ButtonProps['color']
    onCancel?(): void | boolean
    onConfirm(): void
}

interface IWrapper {
    padding?: IProps['padding']
    margin?: IProps['margin']
    align: IProps['align']
}

export const Wrapper = styled.div<IWrapper>`
    grid-area: actions;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`

const Actions = (props: IProps) => {
    const showButton =
        !props.readonly && (!props.buttons || props.buttons.includes('confirm'))

    return (
        <Wrapper
            align={props.align || 'flex-end'}
            padding={props.padding}
            margin={props.margin}>
            {(!props.buttons || props.buttons.includes('cancel')) && (
                <Button
                    margin='0 16px'
                    disabled={props.disabled}
                    name={props.names ? props.names.cancel : 'cancel-action'}
                    data-testid='cancel-action'
                    onClick={props.onCancel}>
                    {props.labels ? props.labels.cancel : 'Cancelar'}
                </Button>
            )}
            {showButton && (
                <Button
                    color={props.actionButtonColor || 'primary'}
                    variant='contained'
                    disabled={props.disabled}
                    name={props.names ? props.names.confirm : 'confirm-action'}
                    data-testid='confirm-action'
                    onClick={props.onConfirm}>
                    {props.labels ? props.labels.confirm : 'Confirmar'}
                </Button>
            )}
        </Wrapper>
    )
}

export default Actions
