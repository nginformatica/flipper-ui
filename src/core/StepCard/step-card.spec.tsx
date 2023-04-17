import * as React from 'react'
import { render, screen } from '@testing-library/react'
import StepCard from '@/test/mocks/step-card-mock'

describe('StepCard', () => {
    it('should render', () => {
        render(
            <StepCard
                stepProps={{
                    percentage: 0,
                    summary: 'Summary',
                    title: 'Title'
                }}
            />
        )

        const title = screen.getByText('Title')
        const summary = screen.getByText('Summary')

        expect(title).toBeDefined()
        expect(summary).toBeDefined()
    })
})
