import React from 'react'
import DialogV2 from './Dialog'

export interface IProps {
    open: boolean
    title: string
    text: string
    labels?: {
        cancel?: string
        confirm?: string
    }
    onCancel(): void
    onConfirm(): void
}

const ConfirmDialog = (props: IProps) => {
    const { open, title, text, labels, onCancel, onConfirm, ...otherProps } =
        props

    return (
        <DialogV2
            {...otherProps}
            open={open}
            title={title}
            text={text}
            primaryButtonAction={onConfirm}
            primaryButtonText={(labels && labels.confirm) || 'Sim'}
            secondaryButtonText={(labels && labels.cancel) || 'Voltar'}
            primaryButtonColor='primary'
            secondaryButtonAction={onCancel}
            onClose={onCancel}
        />
    )
}

export default ConfirmDialog
