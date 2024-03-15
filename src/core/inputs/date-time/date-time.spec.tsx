import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/'
import { ptBR } from 'date-fns/locale'
import DateTime from '@/test/mocks/date-time-mock'

describe('DateTime', () => {
    it('should render with variant', async () => {
        render(
            <DateTime dateProps={{ type: 'date', inputVariant: 'standard' }} />
        )

        const container = screen.getByRole('date-picker') as HTMLInputElement

        await act(async () => {
            await userEvent.clear(container)
            await userEvent.type(container, '09111991')
        })

        expect(container.value).toBe('09/11/1991')
    })

    it('should update date', async () => {
        render(<DateTime dateProps={{ type: 'date' }} />)

        const container = screen.getByRole('date-picker') as HTMLInputElement

        await act(async () => {
            await userEvent.clear(container)
            await userEvent.type(container, '09111991')
        })

        expect(container.value).toBe('09/11/1991')
    })

    it('should update with custom format', async () => {
        render(
            <DateTime
                dateProps={{
                    format: 'ddMMyyyy',
                    locale: ptBR
                }}
            />
        )

        const container = screen.getByRole('date-picker') as HTMLInputElement

        await act(async () => {
            await userEvent.clear(container)
            await userEvent.type(container, '09111991')
        })

        expect(container.value).toBe('09111991')
    })

    it('should update time', async () => {
        render(<DateTime dateProps={{ type: 'time' }} />)

        const container = screen.getByRole('date-picker') as HTMLInputElement

        await act(async () => {
            await userEvent.clear(container)
            await userEvent.type(container, '0800')
        })

        expect(container.value).toBe('08:00')
    })

    it('should update datetime', async () => {
        render(<DateTime dateProps={{ type: 'datetime' }} />)

        const container = screen.getByRole('date-picker') as HTMLInputElement

        await act(async () => {
            await userEvent.clear(container)
            await userEvent.type(container, '091119910800')
        })

        expect(container.value).toBe('09/11/1991 08:00')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <DateTime
                dateProps={{
                    format: 'ddMMyyyy',
                    locale: ptBR
                }}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
