import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { render, screen, fireEvent } from '@testing-library/react'
import type { ITitles } from '.'
import { CheckCircleOutline, CancelOutlined } from '@/icons'
import ValidationDialog, { ValidationStatus } from '.'
import { theme } from '@/theme'

const { action, secondary } = theme.colors

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
    const stepsTitle = {
        success: 'Success',
        loading: 'Loading',
        error: 'Error'
    }

    const stepsIcons = {
        success: <CheckCircleOutline htmlColor={secondary.main} />,
        error: <CancelOutlined htmlColor={action.cancel} />,
        loading: <CircularProgress size={20} color='inherit' />
    }

    it('should render title "Loading" by default', () => {
        const responses = ['Should', 'render', 'default', 'case']

        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                responses={responses}
                validations={[]}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responses)

        expect(result).toBe(stepsTitle.loading)
    })

    it('should render title "Success" when all items are "Success"', () => {
        const responses = ['Success', 'Success', 'Success', 'Success']

        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                responses={responses}
                validations={[]}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responses)

        expect(result).toBe(stepsTitle.success)
    })

    it('should render title "Loading" when at least one item is "Loading"', () => {
        const responses = ['Success', 'Success', 'Success', 'Loading']

        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                responses={responses}
                validations={[]}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responses)

        expect(result).toBe(stepsTitle.loading)
    })

    it('should render title "Error" when at least one item is "Error"', () => {
        const responses = ['Success', 'Success', 'Success', 'Error']

        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                responses={responses}
                validations={[]}
                icons={stepsIcons}
                handleCreate={jest.fn()}
                onClose={jest.fn()}
                onCancel={jest.fn()}
            />
        )

        const result = renderTitle(stepsTitle, responses)

        expect(result).toBe(stepsTitle.error)
    })

    it('should render onCancel when all responses are "Success"', () => {
        const responses = ['Success', 'Success', 'Success', 'Success']

        render(
            <ValidationDialog
                open
                title={stepsTitle}
                failed={
                    !responses.includes('Loading') &&
                    responses.includes('Error')
                }
                success={responses.every(item => item === 'Success')}
                responses={responses}
                validations={[]}
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
                responses={[]}
                validations={[
                    {
                        description: {
                            loading: 'Loading description',
                            success: 'Success description',
                            error: 'Error description'
                        },
                        status: ValidationStatus.Success
                    }
                ]}
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
                responses={[]}
                validations={[
                    {
                        description: {
                            loading: 'Loading description',
                            success: 'Success description',
                            error: 'Error description'
                        },
                        status: ValidationStatus.Error
                    }
                ]}
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
                responses={[]}
                validations={[
                    {
                        description: {
                            loading: 'Loading description',
                            success: 'Success description',
                            error: 'Error description'
                        },
                        status: ValidationStatus.Loading
                    }
                ]}
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
        const responses = ['Success', 'Success', 'Success', 'Success']

        render(
            <ValidationDialog
                open
                success
                title={stepsTitle}
                failed={false}
                responses={responses}
                validations={[]}
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
})
