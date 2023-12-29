import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ValidationDialog, { ValidationStatus } from '.'
import CircularProgress from '@mui/material/CircularProgress'
import { CheckCircleOutline, CancelOutlined } from '../../../icons'
import Button from '@/core/inputs/button'

const meta: Meta<typeof ValidationDialog> = {
    title: 'Feedback/Validation Dialog',
    component: ValidationDialog,
    argTypes: {
        title: {
            control: 'text',
            description: 'The dialog title.'
        }
    }
}

export default meta

type Story = StoryObj<typeof ValidationDialog>

const ValidationDialogStorie = () => {
    const [open, setOpen] = useState(false)
    const [responses, setResponses] = useState<string[]>([])

    const stepsTitle = {
        success: 'Sua configuração foi validada com sucesso!',
        error: 'Houve algum problema ao configurar',
        loading: 'Validando Integrações'
    }

    const stepsIcons = {
        success: <CheckCircleOutline htmlColor='#118D16' />,
        error: <CancelOutlined htmlColor='#D84315' />,
        loading: <CircularProgress size={20} color='inherit' />
    }

    const stepsValidations = [
        {
            description: {
                loading: 'Validando URL, Porta e Forma de Autenticação',
                success: 'URL, Porta e Forma de Autenticação válidas',
                error: 'URL, Porta e Forma de Autenticação inválidas'
            },
            status: responses[0]
        },
        {
            description: {
                loading: 'Validando Usuário e Senha',
                success: 'Usuário e Senha válidas',
                error: 'Usuário e Senha inválidas'
            },
            status: responses[1]
        },
        {
            description: {
                loading: 'Validando Tipos de Integração',
                success: 'Tipos de Integração válidas',
                error: 'Tipos de Integração inválidas'
            },
            status: responses[2]
        },
        {
            description: {
                loading: 'Validando Filiais',
                success: 'Filiais válidas',
                error: 'Filiais inválidas'
            },
            status: responses[3]
        }
    ]

    const handleClose = () => {
        setOpen(false)
    }

    const handleConfirm = () => {
        alert('chama a mutation')
    }

    const openDialog = () => {
        setOpen(true)
    }

    useEffect(() => {
        return setResponses(
            Array(stepsValidations.length).fill(ValidationStatus.Loading)
        )
    }, [stepsValidations.length])

    return (
        <>
            <Button onClick={openDialog}>Open dialog</Button>

            <ValidationDialog
                open={open}
                title={stepsTitle}
                responses={responses}
                validations={stepsValidations}
                icons={stepsIcons}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                onCancel={handleClose}
                onClose={handleClose}
                handleCreateConfirm={handleConfirm}
            />
        </>
    )
}

export const validationDialog: Story = {
    render: () => <ValidationDialogStorie />
}
