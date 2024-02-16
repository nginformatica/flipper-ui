import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Delete } from '@/icons'
import Stepper from '.'

describe('Stepper', () => {
    it('should render', () => {
        render(
            <Stepper
                active={2}
                steps={['Name', 'Email', 'Password', 'Photo', 'Be happy!']}
            />
        )

        const container = screen.getByRole('stepper-container')
        const stepOne = screen.getByText('Name')
        const stepTwo = screen.getByText('Email')
        const stepThree = screen.getByText('Password')
        const stepFour = screen.getByText('Photo')
        const stepFive = screen.getByText('Be happy!')

        expect(container).toBeTruthy()
        expect(stepOne).toBeTruthy()
        expect(stepTwo).toBeTruthy()
        expect(stepThree).toBeTruthy()
        expect(stepFour).toBeTruthy()
        expect(stepFive).toBeTruthy()
    })

    it('should render with icon', async () => {
        render(
            <Stepper
                bottomLabel
                active={1}
                steps={[
                    {
                        label: 'Name',
                        icon: <Delete data-testid='step-icon1' />
                    },
                    {
                        label: 'Email',
                        icon: () => <Delete data-testid='step-icon2' />
                    },
                    {
                        label: 'Password',
                        icon: <Delete data-testid='step-icon3' />
                    }
                ]}
            />
        )

        const container = screen.getByRole('stepper-container')
        const stepOne = screen.getByText('Name')
        const stepOneIcon = screen.getByTestId('step-icon1')
        const stepTwo = screen.getByText('Email')
        const stepTwoIcon = screen.getByTestId('step-icon2')
        const stepThree = screen.getByText('Password')
        const stepThreeIcon = screen.getByTestId('step-icon3')

        expect(container).toBeTruthy()
        expect(stepOne).toBeTruthy()
        expect(stepOneIcon).toBeTruthy()
        expect(stepTwo).toBeTruthy()
        expect(stepTwoIcon).toBeTruthy()
        expect(stepThree).toBeTruthy()
        expect(stepThreeIcon).toBeTruthy()
        expect(stepOne.classList).toContain('MuiStepLabel-completed')
        expect(stepThree.classList).not.toContain('MuiStepLabel-completed')
    })

    it('should render with no active', async () => {
        render(
            <Stepper
                bottomLabel
                steps={[
                    {
                        label: 'Name',
                        icon: <Delete data-testid='step-icon' />
                    }
                ]}
            />
        )

        const container = screen.getByRole('stepper-container')
        const stepOne = screen.getByText('Name')
        const stepOneIcon = screen.getByTestId('step-icon')

        expect(container).toBeTruthy()
        expect(stepOne).toBeTruthy()
        expect(stepOneIcon).toBeTruthy()
        expect(stepOne.classList).not.toContain('MuiStepLabel-completed')
    })
})
