/* eslint-disable max-len */
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Fab from './Fab'
import FabWrapper from './FabWrapper'
import FileCopyIcon from '@material-ui/icons/FileCopy'

describe('Fab', () => {
    it('should render correctly', () => {
        render(
            <Fab onClick={jest.fn()}>
                <FileCopyIcon />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeSmall')
    })

    it('should render large correctly', () => {
        render(
            <Fab large onClick={jest.fn()}>
                <FileCopyIcon />
            </Fab>
        )

        const container = screen.getByTestId('fab-button')

        expect(container.classList).toContain('MuiFab-sizeMedium')
    })

    it('Should call onClick', () => {
        const onClickSpy = jest.fn()
        render(
            <Fab onClick={onClickSpy}>
                <FileCopyIcon />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        userEvent.click(btn)

        waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('Should show tooltip', () => {
        const onClickSpy = jest.fn()
        render(
            <Fab onClick={onClickSpy} tooltip='tooltip-test'>
                <FileCopyIcon />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        userEvent.hover(btn)

        waitFor(() => {
            const tooltipMessage = screen.getByText('tooltip-test')
            expect(tooltipMessage).toBeDefined()
        })
    })
})

describe('FabWrapper', () => {
    it('should render correctly', () => {
        render(<FabWrapper>Test</FabWrapper>)

        const fabWrapper = screen.getByText('Test')

        expect(fabWrapper).toBeDefined()
    })
})
