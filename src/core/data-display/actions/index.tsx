import React from 'react'
import type { ReactNode } from 'react'
import Button from '@/core/inputs/button'
import { Wrapper } from './styles'

export interface IActionsProps {
    padding?: number | string
    margin?: number | string
    align?: 'flex-end' | 'flex-start' | 'center'
    prefix?: string
    buttons?: Array<'confirm' | 'cancel'>
    actionButtonColor?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
    names?: {
        cancel: string
        confirm: string
    }
    labels?: {
        cancel: ReactNode
        confirm: ReactNode
    }
    readonly?: boolean
    disabled?: boolean
    disabledCancel?: boolean
    disabledConfirm?: boolean
    onCancel?(): void | boolean
    onConfirm(): void
}

const Actions = (props: IActionsProps) => {
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
                    disabled={props.disabled || props.disabledCancel}
                    name={props.names ? props.names.cancel : 'cancel-action'}
                    data-testid='cancel-action'
                    onClick={props.onCancel}>
                    {props.labels ? props.labels.cancel : 'Cancelar'}
                </Button>
            )}
            {showButton && (
                <Button
                    color={props.actionButtonColor || 'secondary'}
                    variant='contained'
                    disabled={props.disabled || props.disabledConfirm}
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
