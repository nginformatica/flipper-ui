import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import DialogV2 from '../dialog'

describe('Dialog', () => {
    const TITLE = 'dialog title'
    const TEXT = 'Dialog text'
    const PRIMARY_BUTTON_TEXT = 'Close'

    it('Should render component', () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title={TITLE}
                primaryButtonText={PRIMARY_BUTTON_TEXT}
                primaryButtonAction={onClickSpy}
                text={TEXT}
            />
        )

        const title = screen.getByText(TITLE)
        const text = screen.getByText(TEXT)
        const primaryButton = screen.getByText(PRIMARY_BUTTON_TEXT)

        expect(title).toBeDefined()
        expect(text).toBeDefined()
        expect(primaryButton).toBeDefined()
    })

    it('Should call primaryButtonAction', async () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title={TITLE}
                primaryButtonText={PRIMARY_BUTTON_TEXT}
                primaryButtonAction={onClickSpy}
                text={TEXT}
            />
        )

        const primaryButton = screen.getByText(PRIMARY_BUTTON_TEXT)

        userEvent.click(primaryButton)

        await waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('Should call secondaryButtonAction', async () => {
        const onClickSpy = jest.fn()

        render(
            <DialogV2
                open
                title={TITLE}
                primaryButtonText={PRIMARY_BUTTON_TEXT}
                primaryButtonAction={onClickSpy}
                text={TEXT}
                secondaryButtonText='secondary'
                secondaryButtonAction={onClickSpy}
            />
        )

        const secondaryButton = screen.getByText('secondary')

        userEvent.click(secondaryButton)

        await waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })
})
