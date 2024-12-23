import React from 'react'
import type { ReactNode } from 'react'
import Actions from '@/core/data-display/actions'
import Typography from '@/core/data-display/typography'
import Button from '@/core/inputs/button'
import { MuiDialog, ValidationWrapper } from './styles'

export interface IValidateProps {
    open: boolean
    failed: boolean
    success: boolean
    title: ITitles
    responses: string[]
    validations: IValidations[]
    icons: {
        success: ReactNode
        error: ReactNode
        loading: ReactNode
    }
    onClose(): void
    onCancel(): void
    handleCreate(): void
}

export interface ITitles {
    success: string
    error: string
    loading: string
}

export interface IValidations {
    description: {
        loading: string
        success: string
        error: string
    }
    status: string
}

export enum ValidationStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error'
}

interface IIcon {
    status: string
    icons: {
        success: ReactNode
        error: ReactNode
        loading: ReactNode
    }
}

const ValidationDialog = ({
    open,
    failed,
    success,
    title,
    responses,
    validations,
    icons,
    onClose,
    onCancel,
    handleCreate
}: IValidateProps) => {
    const renderTitle = (stepsTitle: ITitles, responses: string[]) => {
        if (responses.every(item => item === 'Success')) {
            return stepsTitle.success
        }

        if (responses.some(item => item === 'Loading')) {
            return stepsTitle.loading
        }

        if (responses.includes('Error')) {
            return stepsTitle.error
        }

        return stepsTitle.loading
    }

    const renderIcon = ({ status, icons }: IIcon) => {
        if (status === 'Success') {
            return icons.success
        }

        if (status === 'Error') {
            return icons.error
        }

        return icons.loading
    }

    const renderDescription = (
        status: string,
        description: {
            loading: string
            success: string
            error: string
        }
    ) => {
        if (status === 'Success') {
            return (
                <Typography variant='body1'>{description.success}</Typography>
            )
        }

        if (status === 'Error') {
            return <Typography variant='body1'>{description.error}</Typography>
        }

        return <Typography variant='body1'>{description.loading}</Typography>
    }

    const renderContent = (
        validations: IValidations[],
        icons: {
            success: ReactNode
            error: ReactNode
            loading: ReactNode
        }
    ) => {
        return validations.map((item, i) => {
            return (
                <ValidationWrapper key={i}>
                    {renderIcon({ status: item.status, icons })}
                    {renderDescription(item.status, item.description)}
                </ValidationWrapper>
            )
        })
    }

    return (
        <MuiDialog
            fullWidth
            open={open}
            scroll='body'
            maxWidth='sm'
            title={renderTitle(title, responses)}
            actions={
                failed ? (
                    <Button
                        color='primary'
                        variant='contained'
                        margin='12px'
                        padding='6px 31.1px'
                        onClick={onClose}>
                        VOLTAR
                    </Button>
                ) : (
                    <Actions
                        disabled={!success}
                        margin='12px'
                        actionButtonColor='secondary'
                        onCancel={onCancel}
                        onConfirm={handleCreate}
                    />
                )
            }
            content={renderContent(validations, icons)}
            onClose={onClose}
        />
    )
}

export default ValidationDialog
