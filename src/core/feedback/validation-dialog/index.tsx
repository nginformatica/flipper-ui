import React from 'react'
import type { FC, ReactNode } from 'react'
import { default as styled } from 'styled-components'
import { Typography } from '@/core/data-display/typography'
import { Button } from '@/core/inputs/button'
import { Actions } from '@/experimental/actions'
import { Dialog } from '../dialog'

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

interface IIcon {
    status: string
    icons: {
        success: ReactNode
        error: ReactNode
        loading: ReactNode
    }
}

export enum ValidationStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error'
}

const MuiDialog = styled(Dialog)`
    div > div > h2 {
        margin-top: 20px;
    }
`

const DialogTypography = styled(Typography)`
    && {
        font-size: 16px;
    }
`

const ValidationWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 15px;
`

const ValidationDialog: FC<IValidateProps> = ({
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
}) => {
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
            return <DialogTypography>{description.success}</DialogTypography>
        }

        if (status === 'Error') {
            return <DialogTypography>{description.error}</DialogTypography>
        }

        return <DialogTypography>{description.loading}</DialogTypography>
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
            title={renderTitle(title, responses)}
            maxWidth='sm'
            scroll='unset-body'
            actions={
                failed ? (
                    <Button
                        color='primary'
                        variant='contained'
                        margin='0 12px 12px 0'
                        padding='6px 31.1px'
                        onClick={onClose}>
                        VOLTAR
                    </Button>
                ) : (
                    <Actions
                        disabled={!success}
                        margin='0 10px 10px'
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
