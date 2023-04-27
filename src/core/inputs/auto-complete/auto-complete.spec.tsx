/* eslint-disable max-lines */
import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AutoComplete, { ISelected, TSelected } from '.'
import ListItem from '@/core/data-display/list-item'
import TextField from '../text-field'
import Typography from '@/core/data-display/typography'
import { act } from 'react-dom/test-utils'

interface MockProps {
    initialValue?: TSelected
    onFocus?: () => void
    focusDelay?: number
    onChange?: (value: TSelected) => void
    autoFocus?: boolean
    selectTextOnFocus?: boolean
    suggestions: ISelected[]
    openOnFocus?: boolean
    caseSensitive?: boolean
}

const MockAtuoComplete = (props: MockProps) => {
    const { suggestions, ...rest } = props
    const [value, setValue] = React.useState<TSelected>(
        props.initialValue ? props.initialValue : ''
    )

    const handleChange = (newValue: TSelected) => {
        props.onChange?.(newValue)
        setValue(newValue)
    }

    return (
        <AutoComplete
            value={value}
            suggestions={suggestions}
            renderInput={props => {
                return (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )
            }}
            renderSuggestion={(item, props, selected) => {
                const label = typeof item === 'string' ? item : item.label
                const hasSubheader = typeof item === 'object' && item.subheader

                return hasSubheader ? (
                    <ListItem onClick={props.onClick}>
                        <Typography variant='caption'>{item.label}</Typography>
                    </ListItem>
                ) : (
                    <ListItem onClick={props.onClick} selected={selected}>
                        {label}
                    </ListItem>
                )
            }}
            {...rest}
            onChange={handleChange}
        />
    )
}

describe('AutoComplete', () => {
    const SUGGESTIONS = [
        { value: 'rock', label: 'Rock' },
        { value: 'pop', label: 'Pop' },
        { value: 'classic', label: 'Classic' }
    ]

    const SUGGESTIONS_WITH_SUBHEADER = [
        { label: 'Genres', subheader: true },
        ...SUGGESTIONS
    ]
    it('should render suggestions', () => {
        render(
            <MockAtuoComplete
                openOnFocus
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const item1 = screen.getByText('Rock')
        const item2 = screen.getByText('Pop')
        const item3 = screen.getByText('Classic')

        expect(item1).toBeTruthy()
        expect(item2).toBeTruthy()
        expect(item3).toBeTruthy()
    })

    it('should render suggestions with case sensitive', async () => {
        render(
            <MockAtuoComplete
                caseSensitive
                openOnFocus
                suggestions={SUGGESTIONS}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        await act(async () => {
            await userEvent.type(input, 'R')
        })

        const item = screen.getByText('Rock')

        expect(item).toBeTruthy()
    })

    it('should render with no suggestions', () => {
        render(<MockAtuoComplete suggestions={[]} />)
        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const item1 = screen.queryByText('Rock')
        const item2 = screen.queryByText('Pop')
        const item3 = screen.queryByText('Classic')

        expect(item1).toBeFalsy()
        expect(item2).toBeFalsy()
        expect(item3).toBeFalsy()
    })

    it('should open with auto focus', async () => {
        render(
            <MockAtuoComplete
                autoFocus
                openOnFocus
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
                initialValue={{ label: 'Rock', value: 'rock' }}
            />
        )

        const subheader = await screen.findByText('Genres')
        const input = await screen.findByText('Rock')

        expect(subheader).toBeTruthy()
        expect(input).toBeTruthy()
    })

    it('should select suggestions', async () => {
        const onChangeSpy = jest.fn()
        render(
            <MockAtuoComplete
                openOnFocus
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
                initialValue={{ label: 'Rock', value: 'rock' }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const item1 = await screen.findByText('Rock')
        const item2 = screen.queryByText('Pop')
        const item3 = screen.queryByText('Classic')

        expect(item1).toBeTruthy()
        expect(item2).toBeFalsy()
        expect(item3).toBeFalsy()
    })

    it('should call onChange with first suggestion for default', () => {
        const onChangeSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(onChangeSpy).toHaveBeenCalledWith({
            value: 'rock',
            label: 'Rock'
        })
    })

    it('should navigate suggestions with arrow key down', () => {
        const onChangeSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(onChangeSpy).toHaveBeenCalledWith({
            value: 'classic',
            label: 'Classic'
        })
    })

    it('should navigate suggestions with arrow key down and up', () => {
        const onChangeSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        fireEvent.keyDown(input, { key: 'ArrowUp' })
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        fireEvent.keyDown(input, { key: 'Enter' })

        expect(onChangeSpy).toHaveBeenCalledWith({ value: 'pop', label: 'Pop' })
    })

    it('should close suggestions on escape', async () => {
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={jest.fn()}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const beforeItem1 = screen.getByText('Rock')
        const beforeItem2 = screen.getByText('Pop')
        const beforeItem3 = screen.getByText('Classic')

        fireEvent.keyDown(input, { key: 'Escape' })

        await waitFor(() => {
            const afterItem1 = screen.queryByText('Rock')
            const afterItem2 = screen.queryByText('Pop')
            const afterItem3 = screen.queryByText('Classic')

            expect(beforeItem1).toBeDefined()
            expect(beforeItem2).toBeDefined()
            expect(beforeItem3).toBeDefined()

            expect(afterItem1).toBeNull()
            expect(afterItem2).toBeNull()
            expect(afterItem3).toBeNull()
        })
    })

    it('when typing should call onChange with correct values', async () => {
        const onChangeSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        userEvent.type(input, 'a')

        await waitFor(() => {
            expect(onChangeSpy).toHaveBeenCalledWith('a')
        })
    })

    it('should call onBlur on leave focus', () => {
        jest.useFakeTimers()
        const onBlurSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onBlur={onBlurSpy}
                onChange={jest.fn()}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.blur(input)
        jest.runAllTimers()

        const afterItem1 = screen.queryByText('Rock')

        expect(onBlurSpy).toHaveBeenCalled()
        expect(afterItem1).toBeNull()

        jest.useRealTimers()
    })

    it('should render suggestions with fade', () => {
        render(
            <AutoComplete
                openOnFocus
                fade
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={jest.fn()}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const item1 = screen.getByText('Rock')
        const item2 = screen.getByText('Pop')
        const item3 = screen.getByText('Classic')

        expect(item1).toBeTruthy()
        expect(item2).toBeTruthy()
        expect(item3).toBeTruthy()
    })

    it('should get suggestions with default width', () => {
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => {
                    props.inputProps.ref = jest.fn().mockReturnValue({
                        current: null
                    })

                    return (
                        <TextField
                            fullWidth
                            placeholder='input-placeholder'
                            {...props}
                        />
                    )
                }}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={jest.fn()}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const suggestionContainer = screen.getByRole('mui-paper-container')

        expect(suggestionContainer).toHaveProperty('style.width', '256px')
    })

    it('should call getBoundingClientRect when getPaperPosition is Above', () => {
        render(
            <AutoComplete
                openOnFocus
                maxHeight={999999}
                suggestions={SUGGESTIONS}
                renderInput={props => {
                    return (
                        <TextField
                            fullWidth
                            placeholder='input-placeholder'
                            {...props}
                        />
                    )
                }}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={jest.fn()}
            />
        )

        const input = screen.getByPlaceholderText('input-placeholder')

        fireEvent.focus(input)

        const suggestionContainer = screen.getByRole('mui-paper-container')

        expect(suggestionContainer).toHaveProperty('style.bottom', '1px')
    })

    it('should call onFocus', () => {
        const onFocusSpy = jest.fn()
        render(
            <MockAtuoComplete
                onFocus={onFocusSpy}
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
            />
        )

        const input = screen.getByPlaceholderText(
            'input-placeholder'
        ) as HTMLInputElement

        fireEvent.focus(input)

        expect(onFocusSpy).toBeCalled()
    })

    it('should selects a suggestion when clicking on it', () => {
        const onChangeSpy = jest.fn()
        render(
            <AutoComplete
                openOnFocus
                suggestions={SUGGESTIONS}
                renderInput={props => (
                    <TextField
                        fullWidth
                        placeholder='input-placeholder'
                        {...props}
                    />
                )}
                renderSuggestion={(item, props, selected) => {
                    const label = typeof item === 'string' ? item : item.label
                    const hasSubheader =
                        typeof item === 'object' && item.subheader

                    return hasSubheader ? (
                        <ListItem>
                            <Typography variant='caption'>
                                {item.label}
                            </Typography>
                        </ListItem>
                    ) : (
                        <ListItem {...props} selected={selected}>
                            {label}
                        </ListItem>
                    )
                }}
                onChange={onChangeSpy}
            />
        )

        const input = screen.getByPlaceholderText(
            'input-placeholder'
        ) as HTMLInputElement

        fireEvent.focus(input)

        const item = screen.getByText('Rock')

        fireEvent.click(item)

        expect(onChangeSpy).toHaveBeenCalledWith({
            value: 'rock',
            label: 'Rock'
        })
    })

    it('should update input value', async () => {
        render(<MockAtuoComplete suggestions={SUGGESTIONS_WITH_SUBHEADER} />)

        const input = screen.getByPlaceholderText(
            'input-placeholder'
        ) as HTMLInputElement

        await act(async () => {
            await userEvent.type(input, 'R')
        })

        const item = await waitFor(() => screen.findByText('Rock'))
        expect(input.value).toBe('R')
        expect(item).toBeTruthy()
    })

    it('should cancel if input value is a subheader', async () => {
        render(
            <MockAtuoComplete
                openOnFocus
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
            />
        )

        const input = screen.getByPlaceholderText(
            'input-placeholder'
        ) as HTMLInputElement

        fireEvent.focus(input)

        const item = await waitFor(() => screen.findByText('Genres'))

        await act(async () => {
            await userEvent.click(item)
        })

        expect(input.value).toBe('')
    })

    it('should select when selectTextOnFocus', async () => {
        render(
            <MockAtuoComplete
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
                selectTextOnFocus
            />
        )

        const input = screen.getByPlaceholderText(
            'input-placeholder'
        ) as HTMLInputElement

        await act(async () => await userEvent.type(input, 'Rock'))

        fireEvent.focus(input)

        expect(input.value).toBe('Rock')
    })

    it('should open suggestions with focusDelay', async () => {
        render(
            <MockAtuoComplete
                openOnFocus
                suggestions={SUGGESTIONS_WITH_SUBHEADER}
                focusDelay={100}
            />
        )

        const item = await waitFor(() => screen.findByText('Rock'))

        expect(item).toBeTruthy()
    })
})
