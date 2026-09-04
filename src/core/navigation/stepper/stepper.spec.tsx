import React from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { IconDelete } from '@/icons/mui'
import Stepper from '.'

describe('Stepper', () => {
    it('should render', () => {
        render(
            <Stepper
                active={2}
                steps={['Name', 'Email', 'Password', 'Photo', 'Be happy!']}
            />
        )

        const container = screen.getByTestId('stepper-container')
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
                        icon: <IconDelete data-testid='step-icon1' />
                    },
                    {
                        label: 'Email',
                        icon: () => <IconDelete data-testid='step-icon2' />
                    },
                    {
                        label: 'Password',
                        icon: <IconDelete data-testid='step-icon3' />
                    }
                ]}
            />
        )

        const container = screen.getByTestId('stepper-container')
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
        expect(stepOne.classList).toContain('Mui-completed')
        expect(stepThree.classList).not.toContain('MuiStepLabel-completed')
    })

    it('should render with no active', async () => {
        render(
            <Stepper
                bottomLabel
                steps={[
                    {
                        label: 'Name',
                        icon: <IconDelete data-testid='step-icon' />
                    }
                ]}
            />
        )

        const container = screen.getByTestId('stepper-container')
        const stepOne = screen.getByText('Name')
        const stepOneIcon = screen.getByTestId('step-icon')

        expect(container).toBeTruthy()
        expect(stepOne).toBeTruthy()
        expect(stepOneIcon).toBeTruthy()
        expect(stepOne.classList).not.toContain('MuiStepLabel-completed')
    })

    it('should call onStepClick with the clicked step index', async () => {
        const onStepClickSpy = jest.fn()

        render(
            <Stepper
                nonLinear
                active={0}
                steps={['Name', 'Email', 'Password']}
                onStepClick={onStepClickSpy}
            />
        )

        await userEvent.click(screen.getByText('Password'))

        expect(onStepClickSpy).toHaveBeenCalledWith(2)
    })

    it('should render a disabled step as an unreachable button', () => {
        render(
            <Stepper
                nonLinear
                active={0}
                steps={[{ label: 'Name' }, { label: 'Email', disabled: true }]}
                onStepClick={jest.fn()}
            />
        )

        const stepOne = screen.getByText('Name').closest('button')
        const stepTwo = screen.getByText('Email').closest('button')

        expect(stepOne?.disabled).toBe(false)
        expect(stepTwo?.disabled).toBe(true)
    })

    it('should take completion from the step itself when non linear', () => {
        render(
            <Stepper
                nonLinear
                active={2}
                steps={[
                    {
                        label: 'Name',
                        completed: true,
                        icon: <IconDelete data-testid='step-icon1' />
                    },
                    {
                        label: 'Email',
                        icon: <IconDelete data-testid='step-icon2' />
                    },
                    {
                        label: 'Password',
                        icon: () => <IconDelete data-testid='step-icon3' />
                    }
                ]}
            />
        )

        const stepOne = screen.getByText('Name')
        const stepTwo = screen.getByText('Email')

        expect(stepOne.classList).toContain('Mui-completed')
        expect(stepTwo.classList).not.toContain('Mui-completed')
    })

    it('should name the step with its caption', () => {
        render(
            <Stepper
                nonLinear
                active={1}
                steps={[
                    { label: 'Identification', caption: '100%' },
                    { label: 'Property', caption: '45%' }
                ]}
                onStepClick={jest.fn()}
            />
        )

        const stepTwo = screen.getByRole('button', { name: /Property 45%/ })

        expect(stepTwo).toBeTruthy()
    })

    it('should stay a read-only trail without nonLinear', () => {
        render(
            <Stepper
                active={1}
                steps={['Name', 'Email', 'Password']}
                onStepClick={jest.fn()}
            />
        )

        expect(screen.queryAllByRole('button')).toHaveLength(0)
    })

    it('should match snapshot', () => {
        const { container } = render(
            <Stepper
                bottomLabel
                active={1}
                steps={[
                    {
                        label: 'Name',
                        icon: <IconDelete data-testid='step-icon1' />
                    },
                    {
                        label: 'Email',
                        icon: () => <IconDelete data-testid='step-icon2' />
                    },
                    {
                        label: 'Password',
                        icon: <IconDelete data-testid='step-icon3' />
                    }
                ]}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
