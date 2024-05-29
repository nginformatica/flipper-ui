import React from 'react'
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import MockedComponent from '@/test/mocks/pin-input-mock'
import PinInput from '.'

describe('PinInput', () => {
    it('should render', () => {
        render(
            <PinInput
                isValidating={false}
                pin={[]}
                pinLength={6}
                setPin={jest.fn()}
                size='small'
                validationResult={false}
                onPinChanged={jest.fn()}
            />
        )

        const pinInput = screen.getAllByRole('pin-input-field')

        expect(pinInput).toHaveLength(6)
    })

    it('should update zeros', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '012345')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('012345')
    })

    it('should update on typing', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '123456')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123456')
    })

    it('should do nothing when typing when input is full', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '1')
            await userEvent.type(pinInput[1], '2')
            await userEvent.type(pinInput[2], '3')
            await userEvent.type(pinInput[3], '4')
            await userEvent.type(pinInput[4], '5')
            await userEvent.type(pinInput[5], '6')
            await userEvent.type(pinInput[5], '7')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123456')
    })

    it('should update on typing with backspace', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '1234{backspace}{backspace}356')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123356')
    })

    it('should update correct if pasted a pin with larger size', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        await act(async () => {
            fireEvent.paste(pinInput[0], {
                clipboardData: {
                    getData: () => '123456789'
                }
            })
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123456')
    })

    it('should not update when typing strings', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '123y56')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('12356')
    })

    it('should update on typing and removing with backspace', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        fireEvent.focus(pinInput[0])

        await act(async () => {
            await userEvent.type(pinInput[0], '123456')
            await userEvent.type(pinInput[pinInput.length - 1], '{backspace}')
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('12345')
    })

    it('should do nothing on typing backspace with empty pin', async () => {
        const { container } = render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        const prev = container.innerHTML

        await act(async () => {
            await userEvent.type(pinInput[0], '{backspace}')
        })

        const after = container.innerHTML

        expect(prev).toEqual(after)
    })

    it('should update on paste', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        await act(async () => {
            fireEvent.paste(pinInput[0], {
                clipboardData: {
                    getData: () => '123456'
                }
            })
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123456')
    })

    it('should trim pin on paste', async () => {
        render(<MockedComponent />)

        const pinInput = screen.getAllByRole('pin-input-field')

        await act(async () => {
            fireEvent.paste(pinInput[0], {
                clipboardData: {
                    getData: () => ' 123456 '
                }
            })
        })

        const pinInputAfterType = screen.getAllByRole('pin-input-field')

        const pin = pinInputAfterType
            .map(inputContainer => {
                return (inputContainer.firstChild as HTMLInputElement).value
            })
            .join('')

        expect(pin).toEqual('123456')
    })

    it('should render on large size', () => {
        render(<MockedComponent pinInputProps={{ size: 'large' }} />)

        const pinInput = screen.getAllByRole('pin-input-field')[0]
        const container = pinInput.parentElement

        expect(pinInput).toHaveProperty('style.width', '45px')
        expect(pinInput).toHaveProperty('style.font-size', '20px')
        expect(container).toHaveProperty('style.width', '40px')
        expect(container).toHaveProperty('style.height', '40px')
        expect(container).toHaveProperty('style.margin-inline', '10px')
    })

    it('should match snapshot', () => {
        const { container } = render(
            <PinInput
                isValidating={false}
                pin={[]}
                pinLength={6}
                setPin={jest.fn()}
                size='small'
                validationResult={false}
                onPinChanged={jest.fn()}
            />
        )

        expect(container).toMatchSnapshot()
    })
})
