import React from 'react'
import styled from 'styled-components'
import Dialog from '../dialog'
import Button from '@/core/inputs/button'
import Actions from '../../../experimental/actions'
import Typography from '../../data-display/typography'

export interface IValidateProps {
    open: boolean
    failed: boolean
    success: boolean
    title: ITitles
    responses: string[]
    validations: IValidations[]
    icons: {
        success: React.ReactNode
        error: React.ReactNode
        loading: React.ReactNode
    }
    onClose(): void
    onCancel(): void
    handleCreateConfirm(): void
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
        success: React.ReactNode
        error: React.ReactNode
        loading: React.ReactNode
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

const ValidationDialog: React.FC<IValidateProps> = ({
    open,
    failed,
    success,
    title,
    responses,
    validations,
    icons,
    onClose,
    onCancel,
    handleCreateConfirm
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
            success: React.ReactNode
            error: React.ReactNode
            loading: React.ReactNode
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
            // open
            fullWidth
            open={open}
            title={renderTitle(title, responses)}
            maxWidth='sm'
            scroll='unset-body'
            actions={
                failed ? (
                    <Button
                        color='secondary'
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
                        onConfirm={handleCreateConfirm}
                    />
                )
            }
            content={renderContent(validations, icons)}
            onClose={onClose}
        />
    )
}

export default ValidationDialog
