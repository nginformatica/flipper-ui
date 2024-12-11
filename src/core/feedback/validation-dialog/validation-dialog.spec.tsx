import React from 'react'
import { CircularProgress } from '@mui/material'
import { render, screen, fireEvent } from '@testing-library/react'
import type { ITitles, IValidations } from '.'
import { IconCancelOutlined, IconCheckCircleOutlined } from '@/icons/mui-icons'
import ValidationDialog, { ValidationStatus } from '.'
import { theme } from '@/theme'

const { action, secondary } = theme.colors

const responses: string[] = []
const validations: IValidations[] = []
const responsesDefault = ['Should', 'render', 'default', 'case']
const responsesSuccess = ['Success', 'Success', 'Success', 'Success']
const responsesLoading = ['Success', 'Success', 'Success', 'Loading']
const responsesError = ['Success', 'Success', 'Success', 'Error']

const stepsTitle = {
    success: 'Success',
    loading: 'Loading',
    error: 'Error'
}

const stepsIcons = {
    success: <IconCheckCircleOutlined htmlColor={secondary.main} />,
    error: <IconCancelOutlined htmlColor={action.cancel} />,
    loading: <CircularProgress size={20} color='inherit' />
}

const successValidation = [
    {
        description: {
            loading: 'Loading description',
            success: 'Success description',
            error: 'Error description'
        },
        status: ValidationStatus.Success
    }
]

const errorValidation = [
    {
        description: {
            loading: 'Loading description',
            success: 'Success description',
            error: 'Error description'
        },
        status: ValidationStatus.Error
    }
]

const loadingValidation = [
    {
        description: {
            loading: 'Loading description',
            success: 'Success description',
            error: 'Error description'
        },
        status: ValidationStatus.Loading
    }
]

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

describe('ValidationDialog', () => {
    it('should render title "Loading" by default', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesDefault.includes('Loading') &&
                    responsesDefault.includes('Error')
                }
                success={responsesDefault.every(item => item === 'Success')}
                responses={responsesDefault}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responsesLoading)

        expect(result).toBe(stepsTitle.loading)
    })

    it('should render title "Success" when all items are "Success"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesSuccess.includes('Loading') &&
                    responsesSuccess.includes('Error')
                }
                success={responsesSuccess.every(item => item === 'Success')}
                responses={responsesSuccess}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responsesSuccess)

        expect(result).toBe(stepsTitle.success)
    })

    it('should render title "Loading" when at least one item is "Loading"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesLoading.includes('Loading') &&
                    responsesLoading.includes('Error')
                }
                success={responsesLoading.every(item => item === 'Success')}
                responses={responsesLoading}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responsesLoading)

        expect(result).toBe(stepsTitle.loading)
    })

    it('should render title "Error" when at least one item is "Error"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesError.includes('Loading') &&
                    responsesError.includes('Error')
                }
                success={responsesError.every(item => item === 'Success')}
                responses={responsesError}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responsesError)

        expect(result).toBe(stepsTitle.error)
    })

    it('should render onCancel when all responses are "Success"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesSuccess.includes('Loading') &&
                    responsesSuccess.includes('Error')
                }
                success={responsesSuccess.every(item => item === 'Success')}
                responses={responsesSuccess}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const closeButton = screen.getByRole('button', { name: 'Cancelar' })

        fireEvent.click(closeButton)

        expect(closeButton).toBeDefined()
    })

    it('should render success description when status is "Success"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={false}
                success={false}
                responses={responses}
                validations={successValidation}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const successDescription = screen.getByText('Success description')

        expect(successDescription).toBeDefined()
    })

    it('should render error description when status is "Error"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={false}
                success={false}
                responses={responses}
                validations={errorValidation}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const errorDescription = screen.getByText('Error description')

        expect(errorDescription).toBeDefined()
    })

    it('should render loading description when status is "Loading"', () => {
        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={false}
                success={false}
                responses={responses}
                validations={loadingValidation}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const loadingDescription = screen.getByText('Loading description')

        expect(loadingDescription).toBeDefined()
    })

    it('should render handleCreate when all responses are "Success"', () => {
        const handleCreateMock = jest.fn()

        render(
            <ValidationDialog
                open
                success
                title={stepsTitle}
                failed={false}
                responses={responsesSuccess}
                validations={validations}
                icons={stepsIcons}
                handleCreate={handleCreateMock}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const createButton = screen.getByRole('button', { name: 'Confirmar' })

        fireEvent.click(createButton)

        expect(handleCreateMock).toHaveBeenCalled()
    })

    it('should match snapshot', () => {
        const { container } = render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responsesDefault.includes('Loading') &&
                    responsesDefault.includes('Error')
                }
                success={responsesDefault.every(item => item === 'Success')}
                responses={responsesDefault}
                validations={validations}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
