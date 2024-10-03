import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/'
import StepCard from '@/test/mocks/step-card-mock'

describe('StepCard', () => {
    it('should render', () => {
        render(
            <StepCard
                stepProps={{
                    percentage: 0,
                    summary: 'Summary',
                    subTitle: 'Subtitle',
                    title: 'Title'
                }}
            />
        )

        const title = screen.getByText('Title')
        const summary = screen.getByText('Summary')
        const subTitle = screen.getByText('Subtitle')
        const statusIcon = screen.getByTestId('step-card-title-icon')

        expect(title).toBeDefined()
        expect(summary).toBeDefined()
        expect(subTitle).toBeDefined()
        expect(statusIcon.style.color).toBe('rgb(117, 117, 117)')
    })

    it('should render with custom styles', () => {
        render(
            <StepCard
                stepProps={{
                    margin: '10px',
                    padding: '5px',
                    percentage: 0,
                    summary: 'Summary',
                    subTitle: 'Subtitle',
                    title: 'Title'
                }}
            />
        )

        const title = screen.getByText('Title')
        const summary = screen.getByText('Summary')
        const subTitle = screen.getByText('Subtitle')

        expect(title).toBeDefined()
        expect(summary).toBeDefined()
        expect(subTitle).toBeDefined()
    })

    it('should render with no loading state', () => {
        render(
            <StepCard
                blockInitialLoading
                stepProps={{
                    expanded: true,
                    percentage: 0,
                    summary: 'Summary',
                    subTitle: 'Subtitle',
                    title: 'Title'
                }}
            />
        )

        const title = screen.getByText('Title')
        const summary = screen.getByText('Summary')
        const subTitle = screen.getByText('Subtitle')

        expect(title).toBeDefined()
        expect(summary).toBeDefined()
        expect(subTitle).toBeDefined()
    })

    it('should render with loading', async () => {
        jest.useFakeTimers()

        render(
            <StepCard
                initialLoading
                stepProps={{
                    percentage: 0,
                    summary: 'Summary',
                    subTitle: 'Subtitle',
                    title: 'Title'
                }}
            />
        )
        const skeleton = await screen.findByTestId('skeleton-container')

        expect(skeleton).toBeDefined()

        jest.runAllTimers()

        await waitFor(async () => {
            const title = screen.getByText('Title')
            const summary = screen.getByText('Summary')
            const subTitle = screen.getByText('Subtitle')

            expect(title).toBeDefined()
            expect(summary).toBeDefined()
            expect(subTitle).toBeDefined()
        })

        jest.useRealTimers()
    })

    it('should render without expandable but with loading', async () => {
        jest.useFakeTimers()

        render(
            <StepCard
                initialLoading
                stepProps={{
                    percentage: 0,
                    showSubTitleSkeleton: true,
                    expandable: false,
                    summary: 'Summary',
                    subTitle: 'Subtitle',
                    title: 'Title'
                }}
            />
        )
        const skeleton = await screen.findByTestId('skeleton-container')

        expect(skeleton).toBeDefined()

        jest.runAllTimers()

        await waitFor(async () => {
            const title = screen.getByText('Title')
            const summary = screen.getByText('Summary')
            const subTitle = screen.queryByText('Subtitle')

            expect(title).toBeDefined()
            expect(summary).toBeDefined()
            expect(subTitle).toBeDefined()
        })

        jest.useRealTimers()
    })

    it('should render without expandable', () => {
        render(
            <StepCard
                stepProps={{
                    percentage: 0,
                    expandable: false,
                    fullWidth: true,
                    summary: 'Summary',
                    title: 'Title'
                }}
            />
        )

        const progressBar = screen.getByTestId('normal-progress')

        expect(progressBar.lastElementChild?.className).toContain(
            'MuiLinearProgress-root'
        )
    })

    it('should render step 100% completed', () => {
        render(
            <StepCard
                stepProps={{
                    percentage: 100,
                    summary: 'Summary',
                    title: 'Title'
                }}
            />
        )

        const statusIcon = screen.getByTestId('step-card-title-icon')

        expect(statusIcon.style.color).toBe('rgb(40, 153, 57)')
    })

    it('should expand without image', async () => {
        render(
            <StepCard
                stepProps={{
                    percentage: 0,
                    summary: 'Summary',
                    title: 'Title',
                    steps: [
                        {
                            title: 'Step 1',
                            done: false
                        },
                        {
                            title: 'Step 2',
                            done: true
                        }
                    ]
                }}
            />
        )

        const title = screen.getByText('Title')

        await userEvent.click(title)

        const step1 = screen.getByText('Step 1')
        const step2 = screen.getByText('Step 2')

        expect(step1).toBeDefined()
        expect(step2).toBeDefined()
    })

    it('should expand with image as string', async () => {
        render(
            <StepCard
                stepProps={{
                    image: 'https://picsum.photos/200',
                    percentage: 50,
                    summary: 'Summary',
                    title: 'Title',
                    steps: [
                        {
                            title: 'Step 1',
                            done: false
                        },
                        {
                            title: 'Step 2',
                            done: true
                        }
                    ]
                }}
            />
        )

        const title = screen.getByText('Title')

        await userEvent.click(title)

        const thumbnail = screen.getByAltText('Step Icon')

        expect(thumbnail).toBeDefined()
    })

    it('should expand with image as object', async () => {
        render(
            <StepCard
                stepProps={{
                    image: <img src='valid-url' alt='Step Icon' />,
                    percentage: 50,
                    summary: 'Summary',
                    title: 'Title',
                    steps: [
                        {
                            title: 'Step 1',
                            done: false
                        },
                        {
                            title: 'Step 2',
                            done: true
                        }
                    ]
                }}
            />
        )

        const title = screen.getByText('Title')

        await userEvent.click(title)

        const thumbnail = screen.getByAltText('Step Icon')

        expect(thumbnail).toBeDefined()
    })

    it('should call onStepUrlClick with correct values', async () => {
        const onStepUrlClickSpy = jest.fn()

        render(
            <StepCard
                stepProps={{
                    percentage: 0,
                    summary: 'Summary',
                    title: 'Title',
                    onStepUrlClick: onStepUrlClickSpy,
                    steps: [
                        {
                            title: 'Step 1',
                            done: false,
                            url: 'valid-url'
                        },
                        {
                            title: 'Step 2',
                            done: true
                        }
                    ]
                }}
            />
        )

        const title = screen.getByText('Title')

        await userEvent.click(title)

        const step1InfoButton = screen.getByTestId('step-card-button-0')

        await userEvent.click(step1InfoButton)

        expect(onStepUrlClickSpy).toHaveBeenCalledWith('valid-url')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <StepCard
                stepProps={{
                    image: 'https://picsum.photos/200',
                    percentage: 50,
                    summary: 'Summary',
                    title: 'Title',
                    steps: [
                        {
                            title: 'Step 1',
                            done: false
                        },
                        {
                            title: 'Step 2',
                            done: true
                        }
                    ]
                }}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
