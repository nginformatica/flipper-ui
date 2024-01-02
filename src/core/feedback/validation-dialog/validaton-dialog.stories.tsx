import React, { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { muiThemeOptions, theme } from '../../../theme'
import ThemeProviderFlipper from '../../context/theme-provider'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@/core/inputs/button'
import ValidationDialog, { ValidationStatus } from '.'
import { CheckCircleOutline, CancelOutlined } from '../../../icons'

const { action, secondary } = theme.colors

const meta: Meta<typeof ValidationDialog> = {
    title: 'Feedback/Validation Dialog',
    component: ValidationDialog,
    argTypes: {
        title: {
            control: 'object',
            description: `The dialog title.
            An object with the three possible scenarios, Loading, Success or Error.`
        },
        validations: {
            control: 'array',
            description: `The dialog validation phrases.
            An array of objects with the three possible scenarios,
            Loading, Success or Error.`
        },
        icons: {
            control: 'object',
            description: `The dialog icons.
            An object with the three possible scenarios, Loading, Success or Error.
            The icon accepts a ReactNode child.`
        }
    }
}

export default meta

type Story = StoryObj<typeof ValidationDialog>

const ValidationDialogStorie = () => {
    const [open, setOpen] = useState(false)
    const [validationResponses, setValidationResponses] = useState<string[]>([])

    const stepsTitle = {
        success: 'Sua configuração foi validada com sucesso!',
        error: 'Houve algum problema ao configurar',
        loading: 'Validando Integrações'
    }

    const stepsIcons = {
        success: <CheckCircleOutline htmlColor={secondary.main} />,
        error: <CancelOutlined htmlColor={action.cancel} />,
        loading: <CircularProgress size={20} color='inherit' />
    }

    const validationSteps = [
        {
            description: {
                loading: 'Validando URL, Porta e Forma de Autenticação',
                success: 'URL, Porta e Forma de Autenticação válidas',
                error: 'URL, Porta e Forma de Autenticação inválidas'
            },
            status: validationResponses[0]
        },
        {
            description: {
                loading: 'Validando Usuário e Senha',
                success: 'Usuário e Senha válidas',
                error: 'Usuário e Senha inválidas'
            },
            status: validationResponses[1]
        },
        {
            description: {
                loading: 'Validando Tipos de Integração',
                success: 'Tipos de Integração válidas',
                error: 'Tipos de Integração inválidas'
            },
            status: validationResponses[2]
        },
        {
            description: {
                loading: 'Validando Filiais',
                success: 'Filiais válidas',
                error: 'Filiais inválidas'
            },
            status: validationResponses[3]
        }
    ]

    const useSubscriptionValidationState = () => {
        const initLoading = useCallback((condition: boolean = true) => {
            if (condition) {
                setValidationResponses(
                    Array(validationSteps.length).fill(ValidationStatus.Loading)
                )
            }
        }, [])

        const stepState = useCallback(
            (condition: boolean = true, step: number, value: string) => {
                if (condition) {
                    setValidationResponses(prevResponses => {
                        const newResponses = [...prevResponses]
                        newResponses[step] = value

                        return newResponses
                    })
                }
            },
            []
        )

        return {
            initLoading,
            stepState
        }
    }

    const validationStatus = useSubscriptionValidationState()

    const handleClose = () => {
        setOpen(false)
        setValidationResponses([])
    }

    const handleConfirm = () => {
        alert('chama a mutation')
    }

    const openDialog = () => {
        setOpen(true)
        validationStatus.initLoading()

        setTimeout(() => {
            validationStatus.stepState(true, 0, 'Success')

            setTimeout(() => {
                validationStatus.stepState(true, 1, 'Error')

                setTimeout(() => {
                    validationStatus.stepState(true, 2, 'Success')

                    setTimeout(() => {
                        validationStatus.stepState(true, 3, 'Success')
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 3000)
    }

    return (
        <ThemeProvider theme={theme}>
            <ThemeProviderFlipper options={muiThemeOptions}>
                <Button onClick={openDialog}>Open dialog</Button>

                <ValidationDialog
                    open={open}
                    title={stepsTitle}
                    icons={stepsIcons}
                    validations={validationSteps}
                    responses={validationResponses}
                    failed={
                        !validationResponses.includes('Loading') &&
                        validationResponses.includes('Error')
                    }
                    success={validationResponses.every(
                        item => item === 'Success'
                    )}
                    onCancel={handleClose}
                    onClose={handleClose}
                    handleCreate={handleConfirm}
                />
            </ThemeProviderFlipper>
        </ThemeProvider>
    )
}

export const validationDialog: Story = {
    render: () => {
        return <ValidationDialogStorie />
    }
}
