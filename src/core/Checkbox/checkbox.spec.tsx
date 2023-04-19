import * as React from 'react'
import { render, screen, act, waitFor, fireEvent } from '@testing-library/react'
import Checkbox from '.'

describe('Checkbox', () => {
    it('should render', () => {
        render(
            <Checkbox
                label='checkbox-label'
                name='checkbox-name'
                onChange={jest.fn()}
            />
        )

        const label = screen.getByText('checkbox-label')
        const checkbox = screen.getByRole('checkbox')

        expect(label).toBeDefined()
        expect(checkbox).toBeDefined()
    })

    it('should render without label', () => {
        render(<Checkbox name='checkbox-name' onChange={jest.fn()} />)

        const checkbox = screen.getByRole('checkbox')

        expect(checkbox).toBeDefined()
    })

    it('should render dense', () => {
        render(
            <Checkbox
                dense
                label='checkbox-label'
                name='checkbox-name'
                onChange={jest.fn()}
            />
        )

        const label = screen.getByText('checkbox-label')

        expect(label.classList).toContain('MuiTypography-body2')
    })

    it('should render switch', () => {
        render(
            <Checkbox
                type='switch'
                label='checkbox-label'
                name='checkbox-name'
                onChange={jest.fn()}
            />
        )

        const label = screen.getByText('checkbox-label')
        const checkbox = screen.getByRole('switch')

        expect(label).toBeDefined()
        expect(checkbox).toBeDefined()
    })

    it('should render with helper', () => {
        render(
            <Checkbox
                label='checkbox-label'
                name='checkbox-name'
                onChange={jest.fn()}
                onHelperClick={jest.fn()}
            />
        )

        const helper = screen.getByRole('helper-box')

        expect(helper).toBeDefined()
    })

    it('should call onChange using checkbox', () => {
        const onChange = jest.fn()

        render(
            <Checkbox
                label='checkbox-label'
                name='checkbox-name'
                onChange={onChange}
            />
        )

        const checkbox = screen.getByRole('checkbox')

        act(() => {
            checkbox.click()
        })

        expect(onChange).toHaveBeenCalled()
    })

    it('should call onChange using switch', () => {
        const onChange = jest.fn()

        render(
            <Checkbox
                type='switch'
                label='checkbox-label'
                name='checkbox-name'
                onChange={onChange}
            />
        )

        const checkbox = screen.getByRole('switch')

        act(() => {
            checkbox.click()
        })

        expect(onChange).toHaveBeenCalled()
    })

    it('should call onHelperClick', async () => {
        const onHelperClick = jest.fn()

        render(
            <Checkbox
                label='checkbox-label'
                name='checkbox-name'
                onChange={jest.fn()}
                onHelperClick={onHelperClick}
            />
        )

        const helper = screen.getByRole('helper-box')
        const button = helper.querySelector('svg')

        fireEvent.click(button || helper)

        await waitFor(() => {
            expect(onHelperClick).toHaveBeenCalled()
        })
    })
})
